import Task from './01_tasks.js';


export class Project {
  //construct new project
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  
  //return the array of tasks
  getTasks() {
    return this.tasks;
  }

  //add a tasks to the array
  addTask(title, description, dueDate) {
    const newTask = new Task(title, description, dueDate);
    this.tasks.push(newTask);
  }

  //remove a task from the array
  removeTask(index) {
    this.tasks.splice(index,1);
  }
}