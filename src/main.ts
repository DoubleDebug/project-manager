import { Project } from "./ts/project/controller";
import { Task } from "./ts/task/controller";
import { TaskState } from "./ts/taskState";
import { User } from "./ts/user/controller";

const container: HTMLElement = document.body;
const user1: User = new User(1, "Double Debug", "pswd123");
const user2: User = new User(2, "John Snow", "pswd321");

const proj1: Project = new Project(1, "RWA", null, new Date());
const proj2: Project = new Project(2, "SWE", null, new Date());

const task1: Task = new Task(1, "Babel", "Configure babel", TaskState.TO_DO);
const task2: Task = new Task(2, "Webpack", "Configure webpack", TaskState.TO_DO);
const task3: Task = new Task(3, "Classes", "Add classes", TaskState.TO_DO);

proj1.addTask(task1);
proj1.addTask(task2);
proj2.addTask(task3);

user1.addProject(proj1);
user1.addProject(proj2);

proj1.draw(container);
proj2.draw(container);

user1.draw(container);
user2.draw(container);