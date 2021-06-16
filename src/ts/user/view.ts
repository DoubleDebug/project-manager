import { UserModel } from "./model";

export class UserView {
    private container: HTMLElement;
    private parent: HTMLElement;

    constructor() {
        this.container = document.createElement('div');
    }

    draw(parent: HTMLElement, model: UserModel): void {
        this.parent = parent;

        this.container.className = 'user';
        const lblName = document.createElement('label');
        lblName.innerHTML = `${model.nickname}<br>
                             (${model.getNumOfProjects()} projects)`;
        this.container.appendChild(lblName);
        this.parent.appendChild(this.container);
    }
}