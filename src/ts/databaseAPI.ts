import { Project } from "./project/controller";
import { Task } from "./task/controller";
import { TaskState } from "./taskState";
import { User } from "./user/controller";

export class DatabaseAPI {
    private static rootURL: string;

    static setRootURL(url: string): void {
        DatabaseAPI.rootURL = url;
    }

    static async getAllUsers() {
        return await fetch(`${DatabaseAPI.rootURL}/users`)
        .then(async (data) => await data.json())
        .then(async (userData) => {
            const users: User[] = [];
            await userData.forEach(async (user: any) => {
                const newUser = new User(user.id, user.nickname, user.password);
                const usersProjects = await fetch(`${DatabaseAPI.rootURL}/users/${user.id}/projects`)
                                            .then(async (data) => await data.json());
                await usersProjects.forEach(async (proj: any) => {                
                    const newProject = new Project(proj.id, proj.name, proj.dueDate);
                    const tasks = await fetch(`${DatabaseAPI.rootURL}/projects/${proj.id}/tasks`)
                                                .then(async (data) => await data.json());
                    tasks.forEach((task: any) => {
                        newProject.addTask(new Task(task.id, task.name, task.description, Number(task.state)));
                    });
                    newUser.addProject(newProject);
                });
                users.push(newUser);
            });
            return users;
        });
    }

    static getUser(id: number): void {

    }
}