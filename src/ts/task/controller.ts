import { TaskState } from '../utils/taskState';
import { TaskModel } from './model';
import { TaskView } from './view';

export class Task {
    public model: TaskModel;
    public view: TaskView;

    constructor(id: number, name: string, state: TaskState) {
        this.model = new TaskModel(id, name, state);
        this.view = new TaskView();
    }
}
