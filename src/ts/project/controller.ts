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

    drawPreview(parent: HTMLElement, goBackFunctionCallback: Function) {
        this.view.drawPreview(parent, this.model, goBackFunctionCallback);
    }
}