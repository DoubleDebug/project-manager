import { TaskModel } from "./model";

export class TaskView {
    private container: HTMLElement;
    private parent: HTMLElement;

    constructor() {
        this.container = document.createElement('div');
    }

    draw(parent: HTMLElement, model: TaskModel): void {
        this.parent = parent;

        this.container.className = 'task';
        const lblName = document.createElement('label');
        lblName.innerHTML = `Name: ${model.name}<br>
                             Description: ${model.description}<br>
                             State: ${model.getState().toString()}`;
        this.container.appendChild(lblName);
        this.parent.appendChild(this.container);
    }
}