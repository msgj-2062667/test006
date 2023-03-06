'use strict';

import * as model from './Model.js';
import { renderTaskList } from './View.js';

function markCompleteCallback(task) {
  model.markComplete(task.id);
  renderTaskView();
}

export function renderTaskView() {
  document.querySelector('#tasks-root').innerHTML = '';
  const taskList = renderTaskList(markCompleteCallback);
  document.querySelector('#tasks-root').appendChild(taskList);
}

document.querySelector('#add-task-button').addEventListener('click', function () {
  const input = document.querySelector('#add-task-input');
  const inputValue = input.value;
  if (inputValue === '') {
      return;
  }
  model.addTask(inputValue);
  input.value = '';
  renderTaskView();
});