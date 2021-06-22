import { ManagerModel } from "./model";
import { ManagerView } from "./view";

export class Manager {
    public model: ManagerModel;
    public view: ManagerView;

    constructor() {
        this.model = new ManagerModel();
        this.view = new ManagerView();
    }

    draw(parent: HTMLElement) {
        this.model.setCurrentUser().then(() => {
            this.view.draw(parent, this.model);
        });
    }
}