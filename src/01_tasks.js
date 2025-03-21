export default class Task {
  //default constructor
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }

  //toggling when the user completes a task
  toggleComplete() {
    this.completed = !this.completed;
  }
}