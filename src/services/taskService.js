import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(filters = {}) {
  let completed;

  if (filters.completed === 'true') {
    completed = true;
  } else if (filters.completed === 'false') {
    completed = false;
  }

  return taskRepository.findAll({ completed });
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}