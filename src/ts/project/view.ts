import { DatabaseAPI } from '../utils/databaseAPI';
import { ManagerModel } from '../manager/model';
import { Task } from '../task/controller';
import { TaskState } from '../utils/taskState';
import { Project } from './controller';
import { ProjectModel } from './model';
import { removeElementsChildren } from '../utils/removeElementsChildren';
import { shortenString } from '../utils/shortenString';
import { displayPopup } from '../utils/toast';
import { drawDropdownButton } from '../utils/dropdown';
import { displayModal } from '../utils/modal';
import { fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class ProjectView {
    container: HTMLElement;
    parent: HTMLElement;

    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'project';
    }

    drawPreview(
        parent: HTMLElement,
        model: ProjectModel,
        goBackFunctionCallback: Function,
        managerModel: ManagerModel,
        clickable: boolean = true
    ) {
        this.parent = parent;

        const card = document.createElement('div');
        card.className = 'card project';
        card.onclick = () => {
            if (clickable) {
                // remove all project previews
                removeElementsChildren(parent);

                // display project editor
                this.drawEditor(
                    parent,
                    model,
                    goBackFunctionCallback,
                    managerModel
                );
            }
        };
        parent.appendChild(card);

        const image = document.createElement('img');
        const randImageNumber = Math.ceil(Math.random() * 6);
        image.className = `card-img-top cardImage cardImage${randImageNumber}`;
        card.appendChild(image);

        const body = document.createElement('div');
        body.className = 'card-body';
        card.appendChild(body);

        const title = document.createElement('label');
        title.className = 'card-title';
        title.innerHTML = shortenString(model.name, 12);
        body.appendChild(title);

        const percentage = model.getPercentageDone();
        const percentageLabel = document.createElement('hlabel1');
        percentageLabel.className = 'lblProjectPercentage';
        percentageLabel.innerHTML = `${percentage}%`;
        body.appendChild(percentageLabel);

        const timeLeft = model.getTimeRemaining(true);
        const dueOnLabel = document.createElement('label');
        dueOnLabel.className = 'card-text lblTimeLeft';
        dueOnLabel.innerHTML = `• ${timeLeft}</br>
       • ${model.getNumOfTasksInState(
           TaskState.FINISHED
       )}/${model.getNumOfTasks()} tasks finished`;
        body.appendChild(dueOnLabel);

        const progress = document.createElement('div');
        progress.className = 'progress';
        body.appendChild(progress);

        const progressBar = document.createElement('div');
        progressBar.className = `progress-bar`;
        progress.appendChild(progressBar);
        setTimeout(() => {
            // animate progress bar after rendering
            progressBar.style.width = `${percentage}%`;
        }, 0);
    }

    drawEditor(
        parent: HTMLElement,
        model: ProjectModel | null,
        goBackFunctionCallback: Function,
        managerModel: ManagerModel
    ) {
        this.parent = parent;

        let newProject = false;
        if (!model) {
            const tomorrowsDate = new Date();
            tomorrowsDate.setDate(tomorrowsDate.getDate() + 1);
            model = new ProjectModel(undefined, '', tomorrowsDate, new Date());
            newProject = true;
        }

        const editor = document.createElement('div');
        editor.className = 'editor';
        parent.appendChild(editor);

        // header
        this.drawEditorHeader(
            editor,
            model,
            goBackFunctionCallback,
            newProject,
            managerModel
        );

        const separator = document.createElement('hr');
        editor.appendChild(separator);

        // task dashboard
        this.drawTaskDashboard(editor, model);
    }

    drawEditorHeader(
        parent: HTMLElement,
        model: ProjectModel,
        goBackFunctionCallback: Function,
        newProject: boolean,
        managerModel: ManagerModel
    ) {
        const header = document.createElement('div');
        header.className = 'editorHeader';
        parent.appendChild(header);

        const image = document.createElement('img');
        const randImageNumber = Math.ceil(Math.random() * 6);
        image.className = `imgProjectHeader cardImage${randImageNumber}`;
        header.appendChild(image);

        const projectHeader = document.createElement('div');
        projectHeader.className = 'projectHeader';
        header.appendChild(projectHeader);

        const inputName = document.createElement('input');
        inputName.id = 'inputProjectName';
        inputName.placeholder = 'Project name';
        inputName.type = 'text';
        inputName.maxLength = 30;
        inputName.className = 'form-control inputProjectName';
        inputName.value = model.name;
        projectHeader.appendChild(inputName);

        const btnBack = document.createElement('button');
        btnBack.className = 'btn btn-light';
        btnBack.innerHTML = 'Back';
        btnBack.onclick = () => {
            // remove editor
            parent.remove();

            // draw dashboard
            goBackFunctionCallback();
        };
        projectHeader.appendChild(btnBack);

        const btnSave = document.createElement('button');
        btnSave.className = 'btn btn-success';
        btnSave.innerHTML = 'Save';
        btnSave.onclick = async () => {
            // saving animation
            const animation = document.createElement('div');
            animation.className = 'spinner-border spinner-border-sm text-light';
            btnSave.innerHTML = animation.outerHTML;

            // short data validation
            if (!model.validateProjectInput(inputName.value)) {
                displayPopup({
                    color: 'red',
                    title: 'Invalid input',
                    message: "Project name can't remain empty.",
                });
                return;
            }

            await this.saveDataFromForm(model, newProject, managerModel);

            // remove editor
            parent.remove();

            // draw dashboard
            goBackFunctionCallback();

            // display message
            if (newProject) {
                displayPopup({
                    color: 'green',
                    title: 'New project',
                    message: 'Successfully added a new project.',
                });
            } else {
                displayPopup({
                    color: 'green',
                    title: 'Successful update',
                    message: 'Successfully updated a project.',
                });
            }
        };
        projectHeader.appendChild(btnSave);

        this.drawOptionsDropdown(
            projectHeader,
            model,
            goBackFunctionCallback,
            managerModel
        );

        const lblProjectDueDate = document.createElement('label');
        lblProjectDueDate.className = 'lblProjectDueDate';
        lblProjectDueDate.innerHTML = '• Due date:';
        projectHeader.appendChild(lblProjectDueDate);

        const inputProjectDueDate = document.createElement('input');
        inputProjectDueDate.id = 'inputProjectDueDate';
        inputProjectDueDate.className = 'form-control';
        inputProjectDueDate.type = 'date';
        inputProjectDueDate.value = model.getDueDateFormatted();
        inputProjectDueDate.onchange = () => {
            // update TimeLeft label
            this.evaluateTimeLeft(
                lblTimeLeft,
                model,
                new Date(inputProjectDueDate.value)
            );
        };
        projectHeader.appendChild(inputProjectDueDate);

        const lblTimeLeft = document.createElement('label');
        lblTimeLeft.className = 'lblTimeLeftEditor';
        this.evaluateTimeLeft(
            lblTimeLeft,
            model,
            new Date(inputProjectDueDate.value)
        );
        projectHeader.appendChild(lblTimeLeft);

        const lblTasksDone = document.createElement('label');
        lblTasksDone.className = 'lblTasksDone';
        projectHeader.appendChild(lblTasksDone);

        const lblPercentage = document.createElement('label');
        lblPercentage.id = 'lblPercentage';
        projectHeader.appendChild(lblPercentage);

        const progress = document.createElement('div');
        progress.className = 'progress progressEditor';
        projectHeader.appendChild(progress);

        const progressBar = document.createElement('div');
        progressBar.className = `progress-bar`;
        progress.appendChild(progressBar);
        setTimeout(() => {
            // animate progress bar after rendering
            ProjectView.evaluateTasksFinished(
                lblTasksDone,
                lblPercentage,
                progressBar,
                model
            );
        }, 0);
    }

    drawTaskDashboard(parent: HTMLElement, model: ProjectModel) {
        const tasksToDo: Task[] = model.getTasksInState(TaskState.TO_DO);
        const tasksInProgress: Task[] = model.getTasksInState(
            TaskState.IN_PROGRESS
        );
        const tasksFinished: Task[] = model.getTasksInState(TaskState.FINISHED);

        const dashboard = document.createElement('div');
        dashboard.className = 'taskDashboard';
        parent.appendChild(dashboard);

        let sectionToDo, sectionInProgress, sectionFinished;

        sectionToDo = this.createSection(model, 'To do', tasksToDo);
        dashboard.appendChild(sectionToDo);

        dashboard.appendChild(this.createSeparator());

        sectionInProgress = this.createSection(
            model,
            'In progress',
            tasksInProgress
        );
        dashboard.appendChild(sectionInProgress);

        dashboard.appendChild(this.createSeparator());

        sectionFinished = this.createSection(model, 'Finished', tasksFinished);
        dashboard.appendChild(sectionFinished);
    }

    drawOptionsDropdown(
        parent: HTMLElement,
        model: ProjectModel,
        goBackFunctionCallback: Function,
        managerModel: ManagerModel
    ) {
        let dropdownItems: HTMLElement[] = [];

        // Change project image
        const btnChangeImage = document.createElement('a');
        dropdownItems.push(btnChangeImage);
        btnChangeImage.className = 'dropdown-item';
        btnChangeImage.innerHTML = 'Change image';
        btnChangeImage.onclick = () => {
            // image generator
            const body = document.createElement('div');
            body.className = 'changeImageContainer';

            const imgContainer = document.createElement('div');
            imgContainer.className = 'imgGenContainer';
            const img = document.createElement('img');
            img.id = 'imgGen';
            img.className = 'cardImage2';
            imgContainer.appendChild(img);
            body.appendChild(imgContainer);

            const lblText = document.createElement('p');
            lblText.innerHTML =
                'Click stop to choose an image for your project.';
            body.appendChild(lblText);

            const btnStop = document.createElement('button');
            btnStop.className = 'btn btn-success btnStopGen';
            btnStop.innerHTML = 'Stop';
            btnStop.onclick = () => {
                const imageNum = img.className.charAt(img.className.length - 1);
                btnStop.innerHTML = `You've chosen image ${imageNum} ✓`;
            };
            body.appendChild(btnStop);

            this.generateRandomImages(img, btnStop);

            // modal
            displayModal({
                title: 'Choose image',
                body: body,
                buttons: [
                    {
                        text: 'Ok',
                        type: 'primary',
                        callback: () => {
                            const imageNum = img.className.charAt(
                                img.className.length - 1
                            );
                            const projectImage =
                                document.getElementsByClassName(
                                    'imgProjectHeader'
                                )[0];
                            projectImage.className =
                                'imgProjectHeader cardImage' + imageNum;
                        },
                    },
                    {
                        text: 'Cancel',
                        type: 'secondary',
                        callback: () => {},
                    },
                ],
            });
        };

        // Mark project as finished
        const btnMark = document.createElement('a');
        dropdownItems.push(btnMark);
        btnMark.className = 'dropdown-item';
        btnMark.innerHTML = 'Mark as finished';
        btnMark.onclick = () => {
            displayModal({
                title: 'Confirmation',
                message:
                    'Are you sure you want to mark this project as finished?',
                buttons: [
                    {
                        text: 'Yes',
                        type: 'primary',
                        callback: async () => {
                            // update project in model
                            model.markAsFinished();

                            // update ui
                            const dashboard = <HTMLElement>(
                                document.getElementsByClassName('dashboard')[0]
                            );
                            removeElementsChildren(dashboard);
                            this.drawEditor(
                                dashboard,
                                model,
                                goBackFunctionCallback,
                                managerModel
                            );

                            // notify user
                            displayPopup({
                                color: 'green',
                                title: 'Successful action',
                                message:
                                    'Successfully marked project as finished.',
                            });
                        },
                    },
                    {
                        text: 'No',
                        type: 'secondary',
                        callback: () => {},
                    },
                ],
            });
        };

        // Delete project
        const btnDelete = document.createElement('a');
        dropdownItems.push(btnDelete);
        btnDelete.className = 'dropdown-item';
        btnDelete.innerHTML = 'Delete project';
        btnDelete.onclick = () => {
            displayModal({
                title: 'Confirmation',
                message: 'Are you sure you want to delete this project?',
                buttons: [
                    {
                        text: 'Yes',
                        type: 'danger',
                        callback: async () => {
                            // delete project in model
                            managerModel.deleteProject(model.getId());

                            // delete project in database
                            await DatabaseAPI.deleteProjects([
                                new Project(
                                    model.getId(),
                                    model.name,
                                    model.getDueDate(),
                                    model.getTimestamp()
                                ),
                            ]);

                            // update ui
                            const dashboard = <HTMLElement>(
                                document.getElementsByClassName('dashboard')[0]
                            );
                            removeElementsChildren(dashboard);
                            goBackFunctionCallback();

                            // notify user
                            displayPopup({
                                color: 'green',
                                title: 'Successful action',
                                message: 'Successfully deleted project.',
                            });
                        },
                    },
                    {
                        text: 'No',
                        type: 'secondary',
                        callback: () => {},
                    },
                ],
            });
        };

        const dropdown = drawDropdownButton(
            parent,
            'btnOptions',
            dropdownItems
        );
        const dropdownButton = document.createElement('button');
        dropdown.appendChild(dropdownButton);
        dropdownButton.className = 'btn btn-light';
        dropdownButton.id = 'btnOptions';
        dropdownButton.setAttribute('data-toggle', 'dropdown');
        dropdownButton.innerHTML = '⋮';
    }

    generateRandomImages(
        imgElement: HTMLImageElement,
        btnElement: HTMLButtonElement
    ) {
        interval(500)
            .pipe(takeUntil(fromEvent(btnElement, 'click')))
            .subscribe((num: number) => {
                const imageNum: number = (num % 6) + 1;
                imgElement.className = `cardImage${imageNum}`;
            });
    }

    createSection(
        model: ProjectModel,
        sectionName: string,
        tasks: Task[]
    ): HTMLElement {
        const section = document.createElement('div');
        section.className = 'taskDashboardSection';
        const lblSection = document.createElement('p');
        lblSection.className = 'lblSection';
        lblSection.innerHTML = sectionName;
        section.appendChild(lblSection);

        tasks.forEach((t: Task) =>
            t.view.drawPreview(section, t.model, model, sectionName, null)
        );

        const btnAddTask = document.createElement('div');
        btnAddTask.className = 'btnAddTask';
        btnAddTask.onmouseenter = () => {
            lblAddTask.classList.toggle('hide');
        };
        btnAddTask.onmouseleave = btnAddTask.onmouseenter;
        btnAddTask.onclick = () => {
            // create new task
            const state =
                sectionName === 'To do'
                    ? TaskState.TO_DO
                    : sectionName === 'In progress'
                    ? TaskState.IN_PROGRESS
                    : TaskState.FINISHED;
            const newTask: Task = new Task(undefined, '', state);

            // draw task editor
            newTask.view.drawPreview(
                section,
                newTask.model,
                model,
                sectionName,
                null,
                false,
                newTask
            );

            // move add task button to bottom
            section.appendChild(btnAddTask);
        };
        section.appendChild(btnAddTask);

        const iconPlus = document.createElement('i');
        iconPlus.className = 'fas fa-plus iconProjectEditor';
        btnAddTask.appendChild(iconPlus);

        const lblAddTask = document.createElement('p');
        lblAddTask.className = 'lblAddTask hide';
        lblAddTask.innerHTML = 'Add task';
        btnAddTask.appendChild(lblAddTask);

        return section;
    }

    createSeparator(): HTMLElement {
        const separator = document.createElement('div');
        separator.className = 'separator';
        return separator;
    }

    evaluateTimeLeft(
        label: HTMLElement,
        model: ProjectModel,
        selectedDate: Date
    ) {
        label.innerHTML = `• ${model.getTimeRemaining(true, selectedDate)}`;
    }

    static evaluateTasksFinished(
        labelTasks: Element,
        labelPercentage: Element,
        progressBar: HTMLElement,
        model: ProjectModel
    ) {
        labelTasks.innerHTML = `• ${model.getNumOfTasksInState(
            TaskState.FINISHED
        )}/${model.getNumOfTasks()} tasks finished`;

        const percentageDone = model.getPercentageDone();
        labelPercentage.innerHTML = `${percentageDone}%`;
        progressBar.style.width = `${percentageDone}%`;
    }

    async saveDataFromForm(
        model: ProjectModel,
        newProject: boolean,
        managerModel: ManagerModel
    ) {
        const name = (<HTMLInputElement>(
            document.getElementById('inputProjectName')
        )).value;
        const date = (<HTMLInputElement>(
            document.getElementById('inputProjectDueDate')
        )).value;

        model.name = name;
        model.setDueDate(new Date(date));

        if (newProject) {
            const user = managerModel.getCurrentUser().model;
            const projModel: ProjectModel = new ProjectModel(
                undefined,
                model.name,
                model.getDueDate(),
                model.getTimestamp()
            );

            // add project to database
            const projResponse: any = await DatabaseAPI.addProject(
                projModel,
                user.getId()
            );
            // add tasks to database
            DatabaseAPI.addTasks(model.getTasks(), projResponse.id);

            // add project to model
            const newProject = new Project(
                projResponse.id,
                model.name,
                model.getDueDate(),
                model.getTimestamp()
            );
            newProject.model.setTasks(model.getTasks());
            managerModel.addNewProject(newProject);
        } else {
            const newProject = new Project(
                model.getId(),
                model.name,
                model.getDueDate(),
                model.getTimestamp()
            );
            newProject.model.setTasks(model.getTasks());
            DatabaseAPI.updateProjects([newProject]);
        }
    }
}
