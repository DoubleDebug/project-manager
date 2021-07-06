import { ManagerModel } from './model';
import { ManagerView } from './view';

export class Manager {
    public model: ManagerModel;
    public view: ManagerView;

    constructor() {
        this.model = new ManagerModel();
        this.view = new ManagerView();
    }

    draw(parent: HTMLElement) {
        this.view.toggleLoadingScreen(parent, true);
        this.model.loadLoggedInUser().then(() => {
            this.view.toggleLoadingScreen(parent, false);
            this.view.draw(parent, this.model);
        });
    }
}
