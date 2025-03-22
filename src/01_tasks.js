import { format, parseISO } from 'date-fns';


export default class Task {
  //default constructor
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = parseISO(dueDate);
    this.dueDate = format(this.dueDate, 'PPP'); // example: Jan 1st, 2025
    this.completed = false;
  }

  //toggling when the user completes a task
  toggleComplete() {
    this.completed = !this.completed
  }
}