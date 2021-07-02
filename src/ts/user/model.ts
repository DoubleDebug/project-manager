import { Project } from '../project/controller';
import { Task } from '../task/controller';
import { TaskState } from '../utils/taskState';

export class UserModel {
    private id: number;
    public nickname: string;
    private password: string;
    private projects: Project[];

    constructor(id: number, nickname: string, password: string) {
        this.id = id;
        this.nickname = nickname;
        this.password = password;
        this.projects = [];
    }

    getId(): number {
        return this.id;
    }

    getPassword(): string {
        return this.password;
    }

    getProjects(): Project[] {
        return this.projects;
    }

    setProjects(p: Project[]) {
        this.projects = p;
    }

    getNumOfProjects(): number {
        return this.projects.length;
    }

    addProject(p: Project) {
        this.projects.push(p);
    }

    removeProject(id: number) {
        this.projects = this.projects.filter(
            (p: Project) => p.model.getId() !== id
        );
    }

    sortProjects(
        criteria: 'getTimestamp' | 'getDueDate' | 'getNumOfTasks',
        reverseOperators: boolean = false
    ) {
        this.projects.sort((a: Project, b: Project): number => {
            if (a.model[criteria]() < b.model[criteria]())
                return reverseOperators ? 1 : -1;
            else if (a.model[criteria]() > b.model[criteria]())
                return reverseOperators ? -1 : 1;

            return 0;
        });
    }

    markAllAsFinished() {
        this.projects.map((proj: Project) => {
            proj.model.markAsFinished();
        });
    }

    deleteAllProjects() {
        this.projects = [];
    }
}
