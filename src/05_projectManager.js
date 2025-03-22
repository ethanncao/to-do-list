import { project } from './02_projects.js';

let projects = [];

export class ProjectManager {

  //returning our projects
  getProjects() {
    return projects;
  }
  
  //add a project
  addProject(project) {
    projects.push(project);
  }

  //delete project
  deleteProject(index) {
    projects.splice(index,1);
  }
}