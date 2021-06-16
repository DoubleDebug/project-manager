import { TaskState } from "../taskState";
import { TaskModel } from "./model";
import { TaskView } from "./view";

export class Task {
    public model: TaskModel;
    public view: TaskView;

    constructor(id: number, name: string, description: string, state: TaskState) {
        this.model = new TaskModel(id, name, description, state);
        this.view = new TaskView();
    }    

    draw(parent: HTMLElement): void {
        this.view.draw(parent, this.model);
    }
}