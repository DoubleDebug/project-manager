import { timeAgoFormatted, timeLeft } from "time-left-ago";
import { Task } from "../task/controller";
import { TaskState } from "../taskState";

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
        if (this.tasks.length === 0) return 0;

        const numOfTasks = this.tasks.length;
        const numOfFinishedTasks = this.tasks.reduce((acc: number, curr: Task): number => {
            if (curr.model.getState() === TaskState.Finished)
                acc += 1;
            return acc;
        }, 0);

        return Math.round(numOfFinishedTasks / numOfTasks * 100);
    }

    getTimeRemaining(): string {
        if (this.getDueDate() < (new Date()))
        {
            const timeAgo = timeAgoFormatted(this.dueDate.toString());
            return timeAgo.toLowerCase() + ' ago';
        }
        else if (this.getDueDate() > (new Date()))
            return timeLeft(this.getDueDate(), 1);

        return 'Today';
    }
}