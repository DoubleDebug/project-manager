import { Task } from "../task/controller";

export class ProjectModel {
    private id: number;
    public name: string;
    private tasks: Task[];
    public dueDate: Date;

    constructor(id: number, name: string, dueDate: Date) {
        this.id = id;
        this.name = name;
        this.tasks = [];
        this.dueDate = dueDate;
    }

    getId(): number {
        return this.id;
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(t: Task): void {
        this.tasks.push(t);
    }

    removeTask(id: number): void {
        this.tasks = this.tasks.filter((t: Task) => t.model.getId() !== id);
    }
}