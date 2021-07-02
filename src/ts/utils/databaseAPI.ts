import { Project } from '../project/controller';
import { ProjectModel } from '../project/model';
import { Task } from '../task/controller';
import { User } from '../user/controller';
import { displayPopup } from './toast';

export class DatabaseAPI {
    private static rootURL: string;

    static setRootURL(url: string): void {
        DatabaseAPI.rootURL = url;
    }

    //#region CONVERSION methods

    /**
     * @param taskData is an array of Tasks (database objects)
     */
    static convertTaskFromDbToMvc(taskData: any): Task[] {
        if (taskData.length == 0) return [];

        const tasks: Task[] = [];
        taskData.forEach((task: any) => {
            tasks.push(new Task(task.id, task.name, task.state));
        });
        return tasks;
    }

    /**
     * @param projData is an array of Projects (database objects)
     */
    static async convertProjectFromDbToMvc(projData: any): Promise<Project[]> {
        if (projData.length == 0) return [];

        const projects: Project[] = [];
        const taskPromises: Promise<Task[]>[] = [];

        projData.forEach((p: any) => {
            taskPromises.push(DatabaseAPI.getTasksByProject(p.id));
        });

        return Promise.all(taskPromises).then((tasks: Task[][]) => {
            for (let i = 0; i < projData.length; i++) {
                const newProject = new Project(
                    projData[i].id,
                    projData[i].name,
                    projData[i].dueDate,
                    projData[i].timestamp
                );
                newProject.model.setTasks(tasks[i]);
                projects.push(newProject);
            }

            return projects;
        });
    }

    /**
     * @param userData is an array of Users (database objects)
     */
    static async convertUserFromDbToMvc(userData: any): Promise<User[]> {
        if (userData.length == 0) return [];

        const users: User[] = [];
        const projectPromises: Promise<Project[]>[] = [];

        userData.forEach((u: any) => {
            projectPromises.push(DatabaseAPI.getProjectsByUser(u.id));
        });

        return Promise.all(projectPromises).then((projects: Project[][]) => {
            for (let i = 0; i < userData.length; i++) {
                const newUser = new User(
                    userData[i].id,
                    userData[i].nickname,
                    userData[i].password
                );
                newUser.model.setProjects(projects[i]);
                users.push(newUser);
            }
            return users;
        });
    }

    //#endregion CONVERSION methods
    //#region USER table methods

    static async getAllUsers(): Promise<User[]> {
        return fetch(`${DatabaseAPI.rootURL}/users`)
            .then((data) => data.json())
            .then(
                async (userData) =>
                    await DatabaseAPI.convertUserFromDbToMvc(userData)
            );
    }

    static async getUserById(id: number): Promise<User> {
        return fetch(`${DatabaseAPI.rootURL}/users/${id}`)
            .then((data) => data.json())
            .then(async (userData) =>
                (await DatabaseAPI.convertUserFromDbToMvc([userData])).pop()
            );
    }

    static async getUserByNickname(nickname: string): Promise<User> {
        return fetch(`${DatabaseAPI.rootURL}/users?nickname=${nickname}`)
            .then((data) => data.json())
            .then(async (userData) => {
                if (userData.length === 0) return null;

                return (
                    await DatabaseAPI.convertUserFromDbToMvc(userData)
                ).pop();
            });
    }

    static async addUser(nickname: string, password: string) {
        return $.ajax({
            url: `${DatabaseAPI.rootURL}/users`,
            type: 'POST',
            data: {
                nickname: nickname,
                password: password,
            },
            async: true,
        });
    }

    //#endregion USER table methods
    //#region PROJECT table methods

    static async getAllProjects(): Promise<Project[]> {
        return fetch(`${DatabaseAPI.rootURL}/projects`)
            .then((data) => data.json())
            .then(
                async (projectData: any) =>
                    await DatabaseAPI.convertProjectFromDbToMvc(projectData)
            );
    }

    static async getProjectsByUser(userId: number): Promise<Project[]> {
        return fetch(`${DatabaseAPI.rootURL}/users/${userId}/projects`)
            .then((data) => data.json())
            .then(
                async (projectData: any) =>
                    await DatabaseAPI.convertProjectFromDbToMvc(projectData)
            );
    }

    static async updateProjects(projects: Project[]) {
        let promises: Promise<void>[] = [];
        projects.forEach(async (proj: Project) => {
            await this.updateTasks(proj.model.getTasks(), proj.model.getId());

            promises.push(
                new Promise(() => {
                    fetch(
                        `${DatabaseAPI.rootURL}/projects/${proj.model.getId()}`,
                        {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                name: proj.model.name,
                                dueDate: proj.model.getDueDate(),
                            }),
                        }
                    );
                })
            );
        });

        return Promise.all(promises);
    }

    static async deleteProjects(projects: Project[]) {
        let promises: Promise<Response>[] = [];
        projects.forEach((proj: Project) => {
            // delete all tasks for that project
            DatabaseAPI.deleteTasks(proj.model.getTasks());

            // delete project itself
            promises.push(
                new Promise((resolve, reject) => {
                    fetch(
                        `${DatabaseAPI.rootURL}/projects/${proj.model.getId()}`,
                        {
                            method: 'DELETE',
                        }
                    )
                        .then((response) => {
                            if (!response.ok) {
                                displayPopup({
                                    color: 'red',
                                    title: 'Delete project',
                                    message: `Failed to delete project ${proj.model.getId()}.`,
                                });
                                reject(response);
                            } else {
                                resolve(response);
                            }
                        })
                        .catch((err) => reject(err));
                })
            );
        });
        return Promise.all(promises);
    }

    static async addProject(
        project: ProjectModel,
        userId: number
    ): Promise<any> {
        return $.ajax({
            url: `${DatabaseAPI.rootURL}/projects`,
            type: 'POST',
            data: {
                name: project.name,
                dueDate: project.getDueDate().toISOString(),
                timestamp: project.getTimestamp().toISOString(),
                userId: userId,
            },
            async: true,
        });
    }

    //#endregion PROJECT table methods
    //#region TASK table methods

    static async getAllTasks(): Promise<Task[]> {
        return fetch(`${DatabaseAPI.rootURL}/tasks`)
            .then((data) => data.json())
            .then((taskData: any) =>
                DatabaseAPI.convertTaskFromDbToMvc(taskData)
            );
    }

    static async getTasksByProject(projId: number): Promise<Task[]> {
        return fetch(`${DatabaseAPI.rootURL}/projects/${projId}/tasks`)
            .then((data) => data.json())
            .then((taskData: any) =>
                DatabaseAPI.convertTaskFromDbToMvc(taskData)
            );
    }

    static async getTaskDataById(taskId: number) {
        return fetch(`${DatabaseAPI.rootURL}/tasks/${taskId}`)
            .then((response) => {
                if (response.ok) return response;
                return null;
            })
            .then((data) => {
                if (data) return data.json();
                return null;
            });
    }

    static async updateTasks(tasks: Task[], projectId: number) {
        let promises: Promise<void>[] = [];
        tasks.forEach(async (task: Task) => {
            // check if the task is new
            if (task.model.getId() === undefined) {
                // add new task
                await DatabaseAPI.addTasks([task], projectId);
                return;
            }

            // update existing tasks
            promises.push(
                new Promise(() => {
                    fetch(
                        `${DatabaseAPI.rootURL}/tasks/${task.model.getId()}`,
                        {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                name: task.model.name,
                                state: task.model.getState(),
                            }),
                        }
                    );
                })
            );
        });

        return Promise.all(promises);
    }

    static async addTasks(tasks: Task[], projectId: number): Promise<any[]> {
        let promises: Promise<void>[] = [];
        tasks.forEach((task: Task) => {
            promises.push(
                new Promise(() => {
                    $.ajax({
                        url: `${DatabaseAPI.rootURL}/tasks`,
                        type: 'POST',
                        data: {
                            name: task.model.name,
                            state: task.model.getState(),
                            projectId: projectId,
                        },
                        async: true,
                    });
                })
            );
        });

        return Promise.all(promises);
    }

    static async deleteTasks(tasks: Task[]) {
        let promises: Promise<Response>[] = [];
        tasks.forEach((task: Task) => {
            promises.push(
                new Promise(() => {
                    fetch(
                        `${DatabaseAPI.rootURL}/tasks/${task.model.getId()}`,
                        {
                            method: 'DELETE',
                        }
                    );
                })
            );
        });
        return Promise.all(promises);
    }

    //#endregion TASK table methods
}
