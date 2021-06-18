import { DatabaseAPI } from "./databaseAPI";
import { Project } from "./project/controller";
import { Task } from "./task/controller";
import { TaskState } from "./taskState";
import { User } from "./user/controller";

const container: HTMLElement = document.body;
const dbURL = 'http://localhost:3000';

DatabaseAPI.setRootURL(dbURL);
DatabaseAPI.getAllUsers()
.then(users => {
    console.log(users);
    // users.forEach((user: User) => {
    //     console.log('user', user);
    //     user.draw(container);
    // });
});