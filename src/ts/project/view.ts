import { DatabaseAPI } from '../databaseAPI';
import { ManagerModel } from '../manager/model';
import { ManagerView } from '../manager/view';
import { Task } from '../task/controller';
import { TaskState } from '../taskState';
import { Project } from './controller';
import { ProjectModel } from './model';

export class ProjectView {
  container: HTMLElement;
  parent: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'project';
  }

  drawPreview(parent: HTMLElement, model: ProjectModel, goBackFunctionCallback: Function, managerModel: ManagerModel) {
    this.parent = parent;

    const card = document.createElement('div');
    card.className = 'card project';
    card.onclick = () => {
      // remove all project previews
      ManagerView.removeElementsChildren(parent);

      // display project editor
      this.drawEditor(parent, model, goBackFunctionCallback, managerModel);
    }
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
    title.innerHTML = ManagerModel.shortenString(model.name, 12);
    body.appendChild(title);

    const percentage = model.getPercentageDone();
    const percentageLabel = document.createElement('hlabel1');
    percentageLabel.className = 'lblProjectPercentage';
    percentageLabel.innerHTML = `${percentage}%`;
    body.appendChild(percentageLabel);

    const timeLeft = model.getTimeRemaining(true);
    const dueOnLabel = document.createElement('label');
    dueOnLabel.className = 'card-text lblTimeLeft';
    dueOnLabel.innerHTML =
      `• ${timeLeft}</br>
       • ${model.getNumOfTasksInState(TaskState.FINISHED)}/${model.getNumOfTasks()} tasks finished`;
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

  drawEditor(parent: HTMLElement, model: ProjectModel | null, goBackFunctionCallback: Function, managerModel: ManagerModel) {
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
    this.drawEditorHeader(editor, model, goBackFunctionCallback, newProject, managerModel);

    const separator = document.createElement('hr');
    editor.appendChild(separator);

    // task dashboard
    this.drawTaskDashboard(editor, model);
  }

  drawEditorHeader(parent: HTMLElement, model: ProjectModel, goBackFunctionCallback: Function, newProject: boolean, managerModel: ManagerModel) {
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
    }
    projectHeader.appendChild(btnBack);

    const btnSave = document.createElement('button');
    btnSave.className = 'btn btn-success';
    btnSave.innerHTML = 'Save';
    btnSave.onclick = async () => {
      // short data validation
      if (!model.validateProjectInput(inputName.value)) {
        ManagerView.displayPopup({
          color: 'red',
          title: 'Invalid input',
          message: 'Project name can\'t remain empty.'
        });
        return;
      }

      const user = managerModel.getCurrentUser().model;
      await this.saveDataFromForm(model, newProject, managerModel);

      // remove editor
      parent.remove();

      // draw dashboard
      goBackFunctionCallback();

      // display message
      ManagerView.displayPopup({
        color: 'green',
        title: 'Successful update',
        message: 'Successfully updated a project.'
      })
    }
    projectHeader.appendChild(btnSave);

    this.drawOptionsDropdown(projectHeader, model);

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
      this.evaluateTimeLeft(lblTimeLeft, model, new Date(inputProjectDueDate.value));
    }
    projectHeader.appendChild(inputProjectDueDate);

    const lblTimeLeft = document.createElement('label');
    lblTimeLeft.className = 'lblTimeLeftEditor';
    this.evaluateTimeLeft(lblTimeLeft, model, new Date(inputProjectDueDate.value));
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
      ProjectView.evaluateTasksFinished(lblTasksDone, lblPercentage, progressBar, model);
    }, 0);
  }

  drawTaskDashboard(parent: HTMLElement, model: ProjectModel) {
    const tasksToDo: Task[] = model.getTasksInState(TaskState.TO_DO);
    const tasksInProgress: Task[] = model.getTasksInState(TaskState.IN_PROGRESS);
    const tasksFinished: Task[] = model.getTasksInState(TaskState.FINISHED);

    const dashboard = document.createElement('div');
    dashboard.className = 'taskDashboard';
    parent.appendChild(dashboard);

    let sectionToDo, sectionInProgress, sectionFinished;

    sectionToDo = this.createSection(model, 'To do', tasksToDo);
    dashboard.appendChild(sectionToDo);

    dashboard.appendChild(this.createSeparator());

    sectionInProgress = this.createSection(model, 'In progress', tasksInProgress);
    dashboard.appendChild(sectionInProgress);

    dashboard.appendChild(this.createSeparator());

    sectionFinished = this.createSection(model, 'Finished', tasksFinished);
    dashboard.appendChild(sectionFinished);
  }

  drawOptionsDropdown(parent: HTMLElement, model: ProjectModel) {
    let dropdownItems: HTMLElement[] = [];

    // Mark project as finished
    const btnMark = document.createElement('a');
    btnMark.className = 'dropdown-item';
    btnMark.innerHTML = 'Mark as finished';
    btnMark.onclick = () => {

    };
    dropdownItems.push(btnMark);

    // Delete project
    const btnDelete = document.createElement('a');
    btnDelete.className = 'dropdown-item';
    btnDelete.innerHTML = 'Delete project';
    btnDelete.onclick = () => {

    };
    dropdownItems.push(btnDelete);

    const dropdown = ManagerView.drawDropdownButton(parent, 'btnOptions', dropdownItems);
    const dropdownButton = document.createElement('button');
    dropdown.appendChild(dropdownButton);
    dropdownButton.className = 'btn btn-light';
    dropdownButton.id = 'btnOptions';
    dropdownButton.setAttribute('data-toggle', 'dropdown');
    dropdownButton.innerHTML = '⋮';
  }

  createSection(model: ProjectModel, sectionName: string, tasks: Task[]): HTMLElement {
    const section = document.createElement('div');
    section.className = 'taskDashboardSection';
    const lblSection = document.createElement('p');
    lblSection.className = 'lblSection';
    lblSection.innerHTML = sectionName;
    section.appendChild(lblSection);

    tasks.forEach((t: Task) => t.view.drawPreview(section, t.model, model, sectionName, null));

    const btnAddTask = document.createElement('div');
    btnAddTask.className = 'btnAddTask';
    btnAddTask.innerHTML = '<i class="fas fa-plus iconProjectEditor"></i>';
    section.appendChild(btnAddTask);

    return section;
  }

  createSeparator(): HTMLElement {
    const separator = document.createElement('div');
    separator.className = 'separator';
    return separator;
  }

  evaluateTimeLeft(label: HTMLElement, model: ProjectModel, selectedDate: Date) {
    label.innerHTML = `• ${model.getTimeRemaining(true, selectedDate)}`;
  }

  static evaluateTasksFinished(labelTasks: Element, labelPercentage: Element, progressBar: HTMLElement, model: ProjectModel) {
    labelTasks.innerHTML =
      `• ${model.getNumOfTasksInState(TaskState.FINISHED)}/${model.getNumOfTasks()} tasks finished`;

    const percentageDone = model.getPercentageDone();
    labelPercentage.innerHTML = `${percentageDone}%`;
    progressBar.style.width = `${percentageDone}%`;
  }

  async saveDataFromForm(model: ProjectModel, newProject: boolean, managerModel: ManagerModel) {
    const name = (<HTMLInputElement>document.getElementById('inputProjectName')).value;
    const date = (<HTMLInputElement>document.getElementById('inputProjectDueDate')).value;

    model.name = name;
    model.setDueDate(new Date(date));

    if (newProject) {
      const user = managerModel.getCurrentUser().model;
      const newProject: Project = new Project(undefined, model.name, model.getDueDate(), model.getTimestamp());
      const response: any = await DatabaseAPI.addProject(newProject.model, user.getId());
      await DatabaseAPI.addTasks(model.getTasks(), response.id);
      managerModel.addNewProject(newProject);
    }
    else {
      const projectPromise = DatabaseAPI.updateProjects([
        new Project(model.getId(), model.name, model.getDueDate(), model.getTimestamp())
      ]);
      const taskPromise = DatabaseAPI.updateTasks(model.getTasks());

      await Promise.all([
        taskPromise,
        projectPromise
      ]);
    }
  }
}