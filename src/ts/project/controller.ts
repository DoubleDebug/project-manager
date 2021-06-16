import { Task } from "../task/controller";
import { ProjectModel } from "./model";
import { ProjectView } from "./view";

export class Project {
    public model: ProjectModel;
    public view: ProjectView;

    constructor(id: number, name: string, tasks: Task[], dueDate: Date) {
        this.model = new ProjectModel(id, name, tasks, dueDate);
        this.view = new ProjectView();
    }

    draw(parent: HTMLElement): void {
        this.view.draw(parent, this.model);
    }

    addTask(t: Task): void {
        this.model.addTask(t);
    }

    removeTask(id: number): void {
        this.model.removeTask(id);
    }
}