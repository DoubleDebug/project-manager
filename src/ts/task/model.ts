import { TaskState } from '../utils/taskState';

export class TaskModel {
    private id: number;
    public name: string;
    private state: TaskState;

    constructor(id: number, name: string, state: TaskState) {
        this.id = id;
        this.name = name;
        this.state = state;
    }

    getId(): number {
        return this.id;
    }

    getState(): TaskState {
        return this.state;
    }

    setState(t: TaskState) {
        this.state = t;
    }

    validateNameInput(name: string): boolean {
        if (name === '') return false;
        return true;
    }
}
