import { DatabaseAPI } from './utils/databaseAPI';
import { Manager } from './manager/controller';

// const dbURL = 'http://localhost:3000';
const dbURL = 'https://my-json-server.typicode.com/doubledebug/project-manager';
DatabaseAPI.setRootURL(dbURL);

const manager: Manager = new Manager();
manager.draw(document.body);
