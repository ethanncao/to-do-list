import { format, parseISO } from 'date-fns';


export default class Task {
  //default constructor
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = parseISO(dueDate);
    this.completed = false;
  }

  //toggling when the user completes a task
  toggleComplete() {
    this.completed = !this.completed;
  }

  //use this wheneve we are displaying the date formally
  getFormattedDate() {
    return format(this.dueDate, 'PPP'); // example: Jan 1st, 2025
  }

}