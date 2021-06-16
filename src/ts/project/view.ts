import { ProjectModel } from "./model";

export class ProjectView {
    private container: HTMLElement;
    private parent: HTMLElement;

    constructor() {
        this.container = document.createElement('div');
    }
    
    draw(parent: HTMLElement, model: ProjectModel): void {
        this.parent = parent;

        this.container.className = 'project';
        const lblTitle = document.createElement('label');
        lblTitle.innerHTML = `#${model.getId()} | ${model.name}<br>`;
        this.container.appendChild(lblTitle);

        model.getTasks().forEach(task => task.draw(this.container));

        this.parent.appendChild(this.container);
    }
}