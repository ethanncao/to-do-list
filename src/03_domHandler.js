const todos = document.getElementById('content'); // 'content' was 'todolist' but we changed name in html file

export const domHandler = {

  loadTasks(project) {
    project.tasks.forEach(function(tasks)
    {
        const task = document.createElement('div');
        task.innerHTML = `${tasks.title} \n ${tasks.dueDate}`;
        todos.appendChild(task);
    })
  },
    
  loadToDo(project) {
      todos.innerHTML = `Title: ${project.title}`
      this.loadTasks(project);
  },

  
};