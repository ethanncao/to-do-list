import Task from './01_tasks.js';

//an array of tasks
let tasks = [];

export const taskManager = {
  //return the array of tasks
  getTasks() {
    return tasks;
  },

  //add a tasks to the array
  addTask(title, description, dueDate) {
    const newTask = new Task(title, description, dueDate);
    tasks.push(newTask);
  },

  //remove a task from the array
  removeTask(index) {
    tasks.splice(index,1);
  }
}


