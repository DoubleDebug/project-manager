import { ManagerModel } from "../manager/model";
import { TaskState } from "../taskState";
import { TaskModel } from "./model";

export class TaskView {
    drawPreview(parent: Element, model: TaskModel, section: string, container: HTMLElement = null) {
        let taskPreview = container;
        if (container) {
            while (container.children[0])
                container.children[0].remove();
        }
        else {
            taskPreview = document.createElement('div');
        }

        taskPreview.className = 'taskPreview';
        taskPreview.onmouseenter = () => {
            if (iconGoLeft) iconGoLeft.classList.remove('hide');
            if (iconGoRight) iconGoRight.classList.remove('hide');
        }
        taskPreview.onmouseleave = () => {
            if (iconGoLeft) iconGoLeft.classList.add('hide');
            if (iconGoRight) iconGoRight.classList.add('hide');
        }
        taskPreview.onclick = () => {
            this.drawEditor(taskPreview, model, section);
        }

        if (!container)
            parent.appendChild(taskPreview);

        const iconGoLeft = document.createElement('i');
        if (model.getState() !== TaskState.TO_DO) {
            iconGoLeft.className = 'fas fa-chevron-left fa-sm iconGoLeftRight hide';
            iconGoLeft.onclick = () => {
                const sectionInProgress = <HTMLElement>parent.parentElement.children[1];
                const sectionToDo = <HTMLElement>parent.parentElement.children[0];
                if (section === 'In progress') {
                    model.setState(TaskState.TO_DO);
                    this.drawPreview(sectionToDo, model, 'To do');
                }
                else if (section === 'Finished') {
                    model.setState(TaskState.IN_PROGRESS);
                    this.drawPreview(sectionInProgress, model, 'In progress');
                }
                taskPreview.remove();
            }
        }
        taskPreview.appendChild(iconGoLeft);

        const lblTaskName = document.createElement('label');
        lblTaskName.innerHTML = ManagerModel.shortenString(model.name, 9);
        taskPreview.appendChild(lblTaskName);

        const iconGoRight = document.createElement('i');
        if (model.getState() !== TaskState.FINISHED) {
            iconGoRight.className = 'fas fa-chevron-right fa-sm iconGoLeftRight hide';
            iconGoRight.onclick = () => {
                const sectionFinished = parent.parentElement.children[2];
                const sectionInProgress = parent.parentElement.children[1];
                if (section === 'In progress') {
                    model.setState(TaskState.FINISHED);
                    this.drawPreview(sectionFinished, model, 'Finished');
                }
                else if (section === 'To do') {
                    model.setState(TaskState.IN_PROGRESS);
                    this.drawPreview(sectionInProgress, model, 'In progress');
                }
                taskPreview.remove();
            }
        }
        taskPreview.appendChild(iconGoRight);
    }

    drawEditor(container: HTMLElement, model: TaskModel, section: string) {
        // remove contents from container
        while (container.children[0])
            container.children[0].remove();

        container.classList.toggle('expand');

        const inputTaskName = document.createElement('input');
        inputTaskName.id = 'inputTaskName';
        inputTaskName.className = 'form-control inputTaskName';
        inputTaskName.value = model.name;
        container.appendChild(inputTaskName);

        const btnSave = document.createElement('button');
        btnSave.className = 'btn btn-primary btnSaveTask';
        btnSave.innerHTML = 'Save';
        container.appendChild(btnSave);

        container.onclick = () => {
            this.drawPreview(container.parentElement, model, section, container);
        }
    }
}