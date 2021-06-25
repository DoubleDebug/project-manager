import { DatabaseAPI } from "./databaseAPI";
import { Manager } from "./manager/controller";
import { ManagerModel } from "./manager/model";
import { ProjectModel } from "./project/model";

const dbURL = 'http://localhost:3000';
DatabaseAPI.setRootURL(dbURL);

const manager: Manager = new Manager();
manager.draw(document.body);