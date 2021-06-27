import { DatabaseAPI } from "./databaseAPI";
import { Manager } from "./manager/controller";

const dbURL = 'http://localhost:3000';
DatabaseAPI.setRootURL(dbURL);

const manager: Manager = new Manager();
manager.draw(document.body);