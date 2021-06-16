import { Project } from "../project/controller";

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

    getNumOfProjects(): number {
        return this.projects.length;
    }

    addProject(p: Project): void {
        this.projects.push(p);
    }

    removeProject(id: number): void {
        this.projects = this.projects.filter((p: Project) => p.model.getId() !== id);
    }
}