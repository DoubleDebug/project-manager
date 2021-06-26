import { ManagerView } from './manager/view';
import { Project } from './project/controller';
import { Task } from './task/controller';
import { User } from './user/controller';

export class DatabaseAPI {
  private static rootURL: string;

  static setRootURL(url: string): void {
    DatabaseAPI.rootURL = url;
  }

  // CONVERSION methods

  static convertTaskFromDbToMvc(taskData: any): Task[] {
    if (taskData.length == 0) return [];

    const tasks: Task[] = [];
    taskData.forEach((task: any) => {
      tasks.push(new Task(task.id, task.name, task.description, task.state));
    });
    return tasks;
  }

  static async convertProjectFromDbToMvc(projData: any): Promise<Project[]> {
    if (projData.length == 0) return [];

    const projects: Project[] = [];
    for (let proj of projData) {
      const newProject = new Project(
        proj.id,
        proj.name,
        proj.dueDate,
        proj.timestamp
      );
      await DatabaseAPI.getTasksByProject(proj.id).then((tasks) =>
        newProject.model.setTasks(tasks)
      );
      projects.push(newProject);
    }
    return projects;
  }

  static async convertUserFromDbToMvc(userData: any): Promise<User[]> {
    if (userData.length == 0) return [];

    const users: User[] = [];
    for (let user of userData) {
      const newUser = new User(user.id, user.nickname, user.password);
      await DatabaseAPI.getProjectsByUser(user.id).then((projects) =>
        newUser.model.setProjects(projects)
      );
      users.push(newUser);
    }
    return users;
  }

  // USER table methods

  static async getAllUsers(): Promise<User[]> {
    return fetch(`${DatabaseAPI.rootURL}/users`)
      .then((data) => data.json())
      .then(
        async (userData) => await DatabaseAPI.convertUserFromDbToMvc(userData)
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

        return (await DatabaseAPI.convertUserFromDbToMvc(userData)).pop();
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

  // PROJECT table methods

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
      await this.updateTasks(proj.model.getTasks());

      promises.push(
        new Promise(() => {
          fetch(`${DatabaseAPI.rootURL}/projects/${proj.model.getId()}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: proj.model.name,
              dueDate: proj.model.getDueDate(),
            }),
          });
        })
      );
    });

    Promise.all(promises);
  }

  static async deleteProjects(projects: Project[]) {
    let promises: Promise<Response>[] = [];
    projects.forEach((proj: Project) => {
      promises.push(
        new Promise((resolve, reject) => {
          fetch(`${DatabaseAPI.rootURL}/projects/${proj.model.getId()}`, {
            method: 'DELETE',
          })
            .then((response) => {
              if (!response.ok) {
                ManagerView.displayPopup({
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
    Promise.all(promises);
  }

  // TASK table methods

  static async getAllTasks(): Promise<Task[]> {
    return fetch(`${DatabaseAPI.rootURL}/tasks`)
      .then((data) => data.json())
      .then((taskData: any) => DatabaseAPI.convertTaskFromDbToMvc(taskData));
  }

  static async getTasksByProject(projId: number): Promise<Task[]> {
    return fetch(`${DatabaseAPI.rootURL}/projects/${projId}/tasks`)
      .then((data) => data.json())
      .then((taskData: any) => DatabaseAPI.convertTaskFromDbToMvc(taskData));
  }

  static async updateTasks(tasks: Task[]) {
    let promises: Promise<void>[] = [];
    tasks.forEach((task: Task) => {
      promises.push(
        new Promise(() => {
          fetch(`${DatabaseAPI.rootURL}/tasks/${task.model.getId()}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: task.model.name,
              description: task.model.description,
              state: task.model.getState(),
            }),
          });
        })
      );
    });

    Promise.all(promises);
  }
}
