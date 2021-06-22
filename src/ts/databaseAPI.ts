import { Project } from "./project/controller";
import { Task } from "./task/controller";
import { User } from "./user/controller";

export class DatabaseAPI {
    private static rootURL: string;

    static setRootURL(url: string): void {
        DatabaseAPI.rootURL = url;
    }

    // CONVERSION methods

    static convertTaskFromDbToMvc(taskData: any): Task[] {
        if (taskData.length == 0)
            return null;

        const tasks: Task[] = [];
        taskData.forEach((task: any) => {
            tasks.push(new Task(task.id, task.name, task.description, Number(task.state)));
        });
        return tasks;
    }

    static convertProjectFromDbToMvc(projData: any): Project[] {
        if (projData.length == 0)
            return null;

        const projects: Project[] = [];            
        projData.forEach((proj: any) => {
            const newProject = new Project(proj.id, proj.name, proj.dueDate);
            DatabaseAPI.getTasksByProject(proj.id)
            .then(tasks => newProject.model.setTasks(tasks));
            projects.push(newProject);
        });
        return projects;
    }

    static convertUserFromDbToMvc(userData: any): User[] {
        if (userData.length == 0)
            return null;

        const users: User[] = [];
        userData.forEach((user: any) => {
            const newUser = new User(user.id, user.nickname, user.password);
            DatabaseAPI.getProjectsByUser(user.id)
            .then(projects => newUser.model.setProjects(projects));
            users.push(newUser);
        });
        return users;
    }

    // USER table methods

    static async getAllUsers(): Promise<User[]> {
        return fetch(`${DatabaseAPI.rootURL}/users`)
        .then(data => data.json())
        .then(userData => DatabaseAPI.convertUserFromDbToMvc(userData));
    }

    static async getUserById(id: number): Promise<User> {
        return fetch(`${DatabaseAPI.rootURL}/users/${id}`)
        .then(data => data.json())
        .then(userData => DatabaseAPI.convertUserFromDbToMvc([userData]).pop());
    }

    static async getUserByNickname(nickname: string): Promise<User> {
        return fetch(`${DatabaseAPI.rootURL}/users?nickname=${nickname}`)
        .then(data => data.json())
        .then(userData => {
            if (userData.length === 0)
                return null;

            return DatabaseAPI.convertUserFromDbToMvc(userData).pop();
        });
    }

    static async addUser(nickname: string, password: string) {
        return $.ajax({
            url : `${DatabaseAPI.rootURL}/users`,
            type: 'POST',
            data: {
                nickname: nickname,
                password: password
            },
            async: true
        });
    }

    // PROJECT table methods
    
    static async getAllProjects(): Promise<Project[]> {
        return fetch(`${DatabaseAPI.rootURL}/projects`)
        .then(data => data.json())
        .then((projectData: any) => DatabaseAPI.convertProjectFromDbToMvc(projectData));
    }
    
    static async getProjectsByUser(userId: number): Promise<Project[]> {
        return fetch(`${DatabaseAPI.rootURL}/users/${userId}/projects`)
        .then(data => data.json())
        .then((projectData: any) => DatabaseAPI.convertProjectFromDbToMvc(projectData));
    }

    // TASK table methods

    static async getAllTasks(): Promise<Task[]> {
        return fetch(`${DatabaseAPI.rootURL}/tasks`)
        .then(data => data.json())
        .then((taskData: any) => DatabaseAPI.convertTaskFromDbToMvc(taskData));
    }

    static async getTasksByProject(projId: number): Promise<Task[]> {
        return fetch(`${DatabaseAPI.rootURL}/projects/${projId}/tasks`)
        .then(data => data.json())
        .then((taskData: any) => DatabaseAPI.convertTaskFromDbToMvc(taskData));
    }
}