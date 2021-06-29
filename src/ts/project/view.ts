import { ManagerModel } from '../manager/model';
import { ManagerView } from '../manager/view';
import { Task } from '../task/controller';
import { TaskState } from '../taskState';
import { ProjectModel } from './model';

export class ProjectView {
  container: HTMLElement;
  parent: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'project';
  }

  drawPreview(parent: HTMLElement, model: ProjectModel, goBackFunctionCallback: Function) {
    this.parent = parent;

    const card = document.createElement('div');
    card.className = 'card project';
    card.onclick = () => {
      // remove all project previews
      ManagerView.removeElementsChildren(parent);

      // display project editor
      this.drawEditor(parent, model, goBackFunctionCallback);
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

  drawEditor(parent: HTMLElement, model: ProjectModel, goBackFunctionCallback: Function) {
    this.parent = parent;

    const editor = document.createElement('div');
    editor.className = 'editor';
    parent.appendChild(editor);

    // header
    this.drawEditorHeader(editor, model, goBackFunctionCallback);

    const separator = document.createElement('hr');
    editor.appendChild(separator);

    // task dashboard
    this.drawTaskDashboard(editor, model);
  }

  drawEditorHeader(parent: HTMLElement, model: ProjectModel, goBackFunctionCallback: Function) {
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
    btnSave.onclick = () => {

    }
    projectHeader.appendChild(btnSave);

    // const btnDelete = document.createElement('button');
    // btnDelete.className = 'btn btn-danger';
    // btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
    // btnDelete.onclick = () => {

    // }
    // projectHeader.appendChild(btnDelete);

    const btnOptions = document.createElement('button');
    btnOptions.id = 'btnOptions';
    btnOptions.className = 'btn btn-light';
    btnOptions.innerHTML = '⋮';
    btnOptions.onclick = () => {

    }
    projectHeader.appendChild(btnOptions);

    const lblProjectDueDate = document.createElement('label');
    lblProjectDueDate.className = 'lblProjectDueDate';
    lblProjectDueDate.innerHTML = '• Due date:';
    projectHeader.appendChild(lblProjectDueDate);

    const inputProjectDueDate = document.createElement('input');
    inputProjectDueDate.id = 'inputProjectDueDate';
    inputProjectDueDate.className = 'form-control';
    inputProjectDueDate.type = 'date';
    inputProjectDueDate.value = model.getDueDateFormatted();
    projectHeader.appendChild(inputProjectDueDate);

    const lblTimeLeft = document.createElement('label');
    lblTimeLeft.className = 'lblTimeLeftEditor';
    lblTimeLeft.innerHTML = `• Time left: ${model.getTimeRemaining(false)}`;
    projectHeader.appendChild(lblTimeLeft);

    const lblTasksDone = document.createElement('label');
    lblTasksDone.className = 'lblTasksDone';
    lblTasksDone.innerHTML =
      `• ${model.getNumOfTasksInState(TaskState.FINISHED)}/${model.getNumOfTasks()} tasks finished`;
    projectHeader.appendChild(lblTasksDone);

    const percentageDone = model.getPercentageDone();
    const lblPercentage = document.createElement('label');
    lblPercentage.id = 'lblPercentage';
    lblPercentage.innerHTML = `${percentageDone}%`;
    projectHeader.appendChild(lblPercentage);

    const progress = document.createElement('div');
    progress.className = 'progress progressEditor';
    projectHeader.appendChild(progress);

    const progressBar = document.createElement('div');
    progressBar.className = `progress-bar`;
    progress.appendChild(progressBar);
    setTimeout(() => {
      // animate progress bar after rendering
      progressBar.style.width = `${percentageDone}%`;
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

    sectionToDo = this.createSection('To do', tasksToDo);
    dashboard.appendChild(sectionToDo);

    sectionInProgress = this.createSection('In progress', tasksInProgress);
    dashboard.appendChild(sectionInProgress);

    sectionFinished = this.createSection('Finished', tasksFinished);
    dashboard.appendChild(sectionFinished);
  }

  createSection(sectionName: string, tasks: Task[]): HTMLElement {
    const section = document.createElement('div');
    section.className = 'taskDashboardSection';
    const lblSection = document.createElement('p');
    lblSection.className = 'lblSection';
    lblSection.innerHTML = sectionName;
    section.appendChild(lblSection);

    tasks.forEach((t: Task) => t.view.drawPreview(section, t.model, sectionName));

    const btnAddTask = document.createElement('div');
    btnAddTask.className = 'btnAddTask';
    btnAddTask.innerHTML = '<i class="fas fa-plus iconProjectEditor"></i>';
    section.appendChild(btnAddTask);

    return section;
  }
}
