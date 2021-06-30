import { ManagerModel } from "../manager/model";
import { ProjectModel } from "../project/model";
import { ProjectView } from "../project/view";
import { TaskState } from "../taskState";
import { TaskModel } from "./model";

export class TaskView {
    container: HTMLElement;
    drawPreview(parent: HTMLElement, model: TaskModel, projectModel: ProjectModel, section: string, container: HTMLElement, switchingSections: boolean = false) {
        const firstTime = (container === null);
        if (firstTime) {
            this.container = container;
            container = document.createElement('div');
            if (switchingSections)
                parent.insertBefore(container, parent.children[parent.children.length - 1]);
            else
                parent.appendChild(container);
        }
        else {
            while (container.children[0])
                container.children[0].remove();
        }
        container.className = 'taskPreview';
        container.onmouseenter = () => {
            if (iconGoLeft) iconGoLeft.classList.remove('hide');
            if (iconGoRight) iconGoRight.classList.remove('hide');
        }
        container.onmouseleave = () => {
            if (iconGoLeft) iconGoLeft.classList.add('hide');
            if (iconGoRight) iconGoRight.classList.add('hide');
        }
        container.onclick = () => {
            while (container.children[0])
                container.children[0].remove();

            this.drawEditor(
                container,
                model,
                projectModel,
                section);
        }

        const iconGoLeft = document.createElement('i');
        if (section !== 'To do') {
            iconGoLeft.className = 'fas fa-chevron-left fa-sm iconGoLeftRight hide';
            iconGoLeft.onclick = (e) => {
                e.stopPropagation();

                const sectionToDo = <HTMLElement>parent.parentElement.children[0];
                const sectionInProgress = <HTMLElement>parent.parentElement.children[2];
                if (section === 'In progress') {
                    model.setState(TaskState.TO_DO);
                    this.drawPreview(sectionToDo, model, projectModel, 'To do', null, true);
                }
                else if (section === 'Finished') {
                    model.setState(TaskState.IN_PROGRESS);
                    this.drawPreview(sectionInProgress, model, projectModel, 'In progress', null, true);
                }
                container.remove();

                this.reevaluateProgress(projectModel);
            }
        }
        container.appendChild(iconGoLeft);

        const lblTaskName = document.createElement('label');
        lblTaskName.innerHTML = ManagerModel.shortenString(model.name, 9);
        container.appendChild(lblTaskName);

        const iconGoRight = document.createElement('i');
        if (section !== 'Finished') {
            iconGoRight.className = 'fas fa-chevron-right fa-sm iconGoLeftRight hide';
            iconGoRight.onclick = (e) => {
                e.stopPropagation();

                const sectionFinished = <HTMLElement>parent.parentElement.children[4];
                const sectionInProgress = <HTMLElement>parent.parentElement.children[2];
                if (section === 'In progress') {
                    model.setState(TaskState.FINISHED);
                    this.drawPreview(sectionFinished, model, projectModel, 'Finished', null, true);
                }
                else if (section === 'To do') {
                    model.setState(TaskState.IN_PROGRESS);
                    this.drawPreview(sectionInProgress, model, projectModel, 'In progress', null, true);
                }
                container.remove();

                this.reevaluateProgress(projectModel);
            }
        }
        container.appendChild(iconGoRight);
    }

    drawEditor(container: HTMLElement, model: TaskModel, projectModel: ProjectModel, section: string) {
        container.classList.toggle('expand');
        container.onclick = null;

        const inputTaskName = document.createElement('input');
        inputTaskName.id = 'inputTaskName';
        inputTaskName.className = 'form-control inputTaskName';
        inputTaskName.value = model.name;
        container.appendChild(inputTaskName);

        const btnSave = document.createElement('button');
        btnSave.className = 'btn btn-success btnSaveTask';
        btnSave.innerHTML = 'Save';
        btnSave.onclick = (e) => {
            e.stopPropagation();
            // update task name
            model.name = inputTaskName.value;

            // clear element
            inputTaskName.remove();
            btnSave.remove();

            this.drawPreview(container.parentElement, model, projectModel, section, container);
        }
        container.appendChild(btnSave);
    }

    reevaluateProgress(projectModel: ProjectModel) {
        const lblTasksDone = document.getElementsByClassName('lblTasksDone')[0];
        const lblPercentage = document.getElementById('lblPercentage');
        const progress = <HTMLElement>document.getElementsByClassName('progress-bar')[0];
        ProjectView.evaluateTasksFinished(lblTasksDone, lblPercentage, progress, projectModel);
    }
}