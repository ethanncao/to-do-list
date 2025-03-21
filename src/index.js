import Task from './01_tasks.js';
import { taskManager } from './02_taskManager.js';


taskManager.addTask("Buy Groceries", "I need to buy eggs, bread, and milk", "2025-03-22");
taskManager.addTask("Buy Groceries", "I need to buy eggs, bread, and milk", "2025-03-22");
taskManager.addTask("Buy Groceries", "I need to buy eggs, bread, and milk", "2025-03-22");

console.log(taskManager.getTasks());
