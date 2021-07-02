import { DatabaseAPI } from '../utils/databaseAPI';
import { ProjectModel } from '../project/model';
import { ProjectView } from '../project/view';
import { TaskState } from '../utils/taskState';
import { Task } from './controller';
import { TaskModel } from './model';
import { displayPopup } from '../utils/toast';
import { shortenString } from '../utils/shortenString';

export class TaskView {
    container: HTMLElement;

    drawPreview(
        parent: HTMLElement,
        model: TaskModel,
        projectModel: ProjectModel,
        section: string,
        container: HTMLElement,
        switchingSections: boolean = false,
        newTask: Task = null
    ) {
        const firstTime = container === null;
        if (firstTime) {
            this.container = container;
            container = document.createElement('div');
            if (switchingSections)
                parent.insertBefore(
                    container,
                    parent.children[parent.children.length - 1]
                );
            else parent.appendChild(container);
        } else {
            while (container.children[0]) container.children[0].remove();
        }
        container.className = 'taskPreview';
        container.onmouseenter = () => {
            if (iconGoLeft) iconGoLeft.classList.remove('hide');
            if (iconGoRight) iconGoRight.classList.remove('hide');
        };
        container.onmouseleave = () => {
            if (iconGoLeft) iconGoLeft.classList.add('hide');
            if (iconGoRight) iconGoRight.classList.add('hide');
        };
        container.onclick = () => {
            while (container.children[0]) container.children[0].remove();

            this.drawEditor(container, model, projectModel, section);
        };

        const iconGoLeft = document.createElement('i');
        if (section !== 'To do') {
            iconGoLeft.className =
                'fas fa-chevron-left fa-sm iconGoLeftRight hide';
            iconGoLeft.onclick = (e) => {
                e.stopPropagation();

                const sectionToDo = <HTMLElement>(
                    parent.parentElement.children[0]
                );
                const sectionInProgress = <HTMLElement>(
                    parent.parentElement.children[2]
                );
                if (section === 'In progress') {
                    model.setState(TaskState.TO_DO);
                    this.drawPreview(
                        sectionToDo,
                        model,
                        projectModel,
                        'To do',
                        null,
                        true
                    );
                } else if (section === 'Finished') {
                    model.setState(TaskState.IN_PROGRESS);
                    this.drawPreview(
                        sectionInProgress,
                        model,
                        projectModel,
                        'In progress',
                        null,
                        true
                    );
                }
                container.remove();

                this.reevaluateProgress(projectModel);
            };
        }
        container.appendChild(iconGoLeft);

        const lblTaskName = document.createElement('label');
        lblTaskName.innerHTML = shortenString(model.name, 9);
        container.appendChild(lblTaskName);

        const iconGoRight = document.createElement('i');
        if (section !== 'Finished') {
            iconGoRight.className =
                'fas fa-chevron-right fa-sm iconGoLeftRight hide';
            iconGoRight.onclick = (e) => {
                e.stopPropagation();

                const sectionFinished = <HTMLElement>(
                    parent.parentElement.children[4]
                );
                const sectionInProgress = <HTMLElement>(
                    parent.parentElement.children[2]
                );
                if (section === 'In progress') {
                    model.setState(TaskState.FINISHED);
                    this.drawPreview(
                        sectionFinished,
                        model,
                        projectModel,
                        'Finished',
                        null,
                        true
                    );
                } else if (section === 'To do') {
                    model.setState(TaskState.IN_PROGRESS);
                    this.drawPreview(
                        sectionInProgress,
                        model,
                        projectModel,
                        'In progress',
                        null,
                        true
                    );
                }
                container.remove();

                this.reevaluateProgress(projectModel);
            };
        }
        container.appendChild(iconGoRight);

        if (newTask) {
            // new task
            while (container.children[0]) container.children[0].remove();

            this.drawEditor(container, model, projectModel, section, newTask);
        }
    }

    drawEditor(
        container: HTMLElement,
        model: TaskModel | null,
        projectModel: ProjectModel,
        section: string,
        newTask: Task = null
    ) {
        container.classList.toggle('expand');
        container.onclick = null;

        const inputTaskName = document.createElement('input');
        inputTaskName.id = 'inputTaskName';
        inputTaskName.placeholder = 'Task name';
        inputTaskName.className = 'form-control inputTaskName';
        inputTaskName.value = model.name;
        container.appendChild(inputTaskName);
        if (newTask) inputTaskName.focus();

        const btnSave = document.createElement('button');
        btnSave.className = 'btn btn-success btnSaveTask';
        btnSave.innerHTML = 'Save';
        btnSave.onclick = (e) => {
            e.stopPropagation();

            // task name validation
            if (!model.validateNameInput(inputTaskName.value)) {
                displayPopup({
                    color: 'red',
                    title: 'Invalid input',
                    message: 'Task name cannot remain empty.',
                });
                return;
            }

            // update task name
            model.name = inputTaskName.value;

            // add new task to project
            if (newTask) projectModel.addTask(newTask);

            // clear element
            inputTaskName.remove();
            btnSave.remove();

            this.drawPreview(
                container.parentElement,
                model,
                projectModel,
                section,
                container
            );

            this.reevaluateProgress(projectModel);
        };
        container.appendChild(btnSave);

        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn btn-danger btnDeleteTask';
        btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
        btnDelete.onclick = (e) => {
            e.stopPropagation();

            // delete task
            projectModel.removeTask(model.getId());
            if (model.getId() !== undefined) {
                DatabaseAPI.deleteTasks([
                    new Task(model.getId(), model.name, model.getState()),
                ]);
            }

            // remove container;
            container.remove();

            this.reevaluateProgress(projectModel);
        };
        container.appendChild(btnDelete);
    }

    reevaluateProgress(projectModel: ProjectModel) {
        const lblTasksDone = document.getElementsByClassName('lblTasksDone')[0];
        const lblPercentage = document.getElementById('lblPercentage');
        const progress = <HTMLElement>(
            document.getElementsByClassName('progress-bar')[0]
        );
        ProjectView.evaluateTasksFinished(
            lblTasksDone,
            lblPercentage,
            progress,
            projectModel
        );
    }
}
