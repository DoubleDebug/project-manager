import { format, formatDistance } from 'date-fns';
import { Task } from '../task/controller';
import { TaskState } from '../taskState';

export class ProjectModel {
    private id: number;
    public name: string;
    private tasks: Task[];
    private dueDate: Date;
    private timestamp: Date;

    constructor(id: number, name: string, dueDate: Date, timestamp: Date) {
        this.id = id;
        this.name = name;
        this.tasks = [];
        this.dueDate = dueDate;
        this.timestamp = timestamp;
    }

    getId(): number {
        return this.id;
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    getNumOfTasks(): number {
        return this.tasks.length;
    }

    setTasks(t: Task[]) {
        if (t === null) return;
        this.tasks = t;
    }

    getDueDate(): Date {
        return new Date(this.dueDate);
    }

    getDueDateFormatted(): string {
        return format(this.getDueDate(), 'yyyy-MM-dd');
    }

    getTimestamp(): Date {
        return new Date(this.timestamp);
    }

    addTask(t: Task) {
        this.tasks.push(t);
    }

    removeTask(id: number) {
        this.tasks = this.tasks.filter((t: Task) => t.model.getId() !== id);
    }

    getPercentageDone(): number {
        if (this.tasks.length === 0)
            return 0;

        const numOfTasks = this.tasks.length;
        const numOfFinishedTasks = this.getNumOfTasksInState(TaskState.FINISHED);
        const numOfInProgressTasks = this.getNumOfTasksInState(TaskState.IN_PROGRESS);

        return Math.round(((numOfFinishedTasks + numOfInProgressTasks / 2) / numOfTasks) * 100);
    }

    getNumOfTasksInState(state: TaskState): number {
        return this.tasks.reduce((acc: number, curr: Task): number => {
            if (curr.model.getState() === state)
                acc += 1;
            return acc;
        }, 0);
    }

    getTimeRemaining(addSuffix: boolean = false): string {
        if (this.getDueDate() < (new Date()))
            return formatDistance(this.getDueDate(), new Date(), { addSuffix: addSuffix });
        else
            return formatDistance(this.getDueDate(), new Date()) + ' left';
    }

    getProjectState(): TaskState {
        const numOfTasks = this.getNumOfTasks();
        if (numOfTasks === 0) return TaskState.TO_DO;

        let result = TaskState.TO_DO;
        for (let i = 0; i < numOfTasks; i++) {
            const currentTaskState = this.tasks[i].model.getState();
            if (currentTaskState === TaskState.IN_PROGRESS
                || (result === TaskState.FINISHED && currentTaskState === TaskState.TO_DO)) {
                result = TaskState.IN_PROGRESS;
                break;
            }

            if (currentTaskState === TaskState.FINISHED) {
                result = TaskState.FINISHED;
            }
        }
        return result;

        // const numOfToDoTasks = this.getNumOfTasksInState(TaskState.TO_DO);
        // const numOfInProgressTasks = this.getNumOfTasksInState(TaskState.IN_PROGRESS);
        // const numOfFinishedTasks = this.getNumOfTasksInState(TaskState.FINISHED);

        // if (numOfToDoTasks === numOfTasks) return TaskState.TO_DO;
        // if (numOfInProgressTasks > 0) return TaskState.IN_PROGRESS;
        // if (numOfFinishedTasks === numOfTasks) return TaskState.FINISHED;

        // return TaskState.IN_PROGRESS;
    }

    getTasksInState(state: TaskState): Task[] {
        return this.tasks.filter((t: Task) => t.model.getState() === state);
    }
}
