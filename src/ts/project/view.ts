import { timeLeft } from 'time-left-ago';
import { ManagerModel } from '../manager/model';
import { ProjectModel } from "./model";

export class ProjectView {
    private container: HTMLElement;
    private parent: HTMLElement;

    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'project';
    }
    
    draw(parent: HTMLElement, model: ProjectModel) {
        this.parent = parent;

        const lblTitle = document.createElement('label');
        lblTitle.innerHTML = `#${model.getId()} | ${model.name}<br>`;
        this.container.appendChild(lblTitle);

        model.getTasks().forEach(task => task.draw(this.container));

        this.parent.appendChild(this.container);
    }

    drawPreview(parent: HTMLElement, model: ProjectModel) {
        const card = document.createElement('div');
        card.className = 'card project';
        parent.appendChild(card);

        const image = document.createElement('img');
        const randImageNumber = Math.ceil(Math.random() * 3);
        image.className = `card-img-top cardImage cardImage${randImageNumber}`;
        card.appendChild(image);

        const body = document.createElement('div');
        body.className = 'card-body';
        card.appendChild(body);
        
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.innerHTML = ManagerModel.shortenString(model.name, 12);
        body.appendChild(title);

        const percentage = model.getPercentageDone();
        const percentageLabel = document.createElement('h1');
        percentageLabel.className = 'lblProjectPercentage';
        percentageLabel.innerHTML = `${percentage}%`;
        body.appendChild(percentageLabel);

        const timeLeft = model.getTimeRemaining();
        const dueOnLabel = document.createElement('p');
        dueOnLabel.className = 'card-text lblTimeLeft';
        dueOnLabel.innerHTML = timeLeft;
        body.appendChild(dueOnLabel);

        const progress = document.createElement('div');
        progress.className = 'progress';
        body.appendChild(progress);

        const progressBar = document.createElement('div');
        progressBar.className = `progress-bar`;
        progressBar.style.width = `${percentage}%`;
        progress.appendChild(progressBar);
    }
}