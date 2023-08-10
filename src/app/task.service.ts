import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks[id];
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  removeTask(id: number) {
    this.tasks.splice(id, 1);
  }

  editTask(id: number, task: Task) {
    this.tasks[id] = task;
  }
}
