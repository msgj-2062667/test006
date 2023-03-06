'use strict';

import { getIncompleteTasks } from './Model.js';

function renderSingleTask(task, markCompleteCallback) {
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item');
  listItem.textContent = ` ${task.description}`;

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-sm', 'btn-warning');
  button.innerHTML = '<span class="material-icons-outlined">done</span>';
  button.addEventListener('click', () => {
    markCompleteCallback(task);
  })
  listItem.prepend(button);

  return listItem;
}

export function renderTaskList(markCompleteCallback) {
  const taskList = getIncompleteTasks();
  if (taskList.length === 0) {
  const message = document.createElement('div');
  message.textContent = 'None!';
  return message;
}


const list = document.createElement('ul');
list.classList.add('list-group', 'list-group-flush');
taskList.forEach(task => list.appendChild(renderSingleTask(task, markCompleteCallback)));

return list;
}