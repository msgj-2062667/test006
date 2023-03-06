'use strict';

import initialTasks from './task-data.js';

let currentTaskList = initialTasks.map((task, index) => ({...task, id: index + 1}));

export function getIncompleteTasks() {
  return currentTaskList.filter(task => task.status === 'incomplete');
}

export function addTask(description) {
  let newTask = {
    description,
    status: 'incomplete',
    id: currentTaskList.length + 1
  };
  currentTaskList = [...currentTaskList, newTask];
}

export function markComplete(id) {
  currentTaskList = currentTaskList.map(task => {
    let taskCopy = {...task};
    if(taskCopy.id === id) {
      taskCopy.status = "complete";
    }
    return taskCopy;
  });
}

