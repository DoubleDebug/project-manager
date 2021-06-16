import { Project } from "../project/controller";
import { UserModel } from "./model";
import { UserView } from "./view";

export class User {
    public model: UserModel;
    public view: UserView;

    constructor(id: number, nickname: string, password: string) {
        this.model = new UserModel(id, nickname, password);
        this.view = new UserView();
    }

    addProject(p: Project): void {
        this.model.addProject(p);
    }

    removeProject(id: number): void {
        this.model.removeProject(id);
    }

    draw(parent: HTMLElement): void {
        this.view.draw(parent, this.model);
    }
}