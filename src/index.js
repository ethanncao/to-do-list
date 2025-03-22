import Task from './01_tasks.js';
import { Project } from './02_projects.js';
import {ProjectManager} from './05_projectManager.js';
import {domHandler} from './03_domHandler.js';


const project = new Project("Daily Tasks");
project.addTask("Get Groceries", "I need to get milk and break", "2025-03-22");
project.addTask("Go to work", "I need to get milk and bread", "2025-03-22");

const study = new Project("Exam Study");
study.addTask("Binary Trees", "Study how to preorder and postorder traversal", "2025-03-23");


const allProjects = new ProjectManager();
allProjects.addProject(project);
allProjects.addProject(study);

console.log(allProjects.getProjects());
console.log(project);

domHandler.loadToDo(project);
