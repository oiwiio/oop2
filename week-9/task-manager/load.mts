import { TaskManager } from "./src/models/TaskManager.js";

const tm = new TaskManager();
await tm.load("todo.json");
console.log(tm.availableTasks());