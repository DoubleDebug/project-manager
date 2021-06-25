import { Task } from "../task/controller";
import { ProjectModel } from "./model";
import { ProjectView } from "./view";

export class Project {
    public model: ProjectModel;
    public view: ProjectView;

    constructor(id: number, name: string, dueDate: Date, timestamp: Date) {
        this.model = new ProjectModel(id, name, dueDate, timestamp);
        this.view = new ProjectView();
    }

    draw(parent: HTMLElement): void {
        this.view.draw(parent, this.model);
    }

    drawPreview(parent: HTMLElement) {
        this.view.drawPreview(parent, this.model);
    }
}