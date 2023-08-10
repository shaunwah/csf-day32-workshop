import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];
  id: number = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks[this.tasks.findIndex(task => task.id == id)];
  }

  addTask(task: Task) {
    this.tasks.push({...task, id: this.id++, isCompleted: false});
  }

  completeTask(id: number) {
    this.tasks[this.tasks.findIndex(task => task.id == id)].isCompleted = true;
  }

  incompleteTask(id: number) {
    this.tasks[this.tasks.findIndex(task => task.id == id)].isCompleted = false;
  }

  removeTask(id: number) {
    this.tasks.splice(this.tasks.findIndex(task => task.id == id), 1);
  }

  editTask(id: number, task: Task) {
    this.tasks[this.tasks.findIndex(task => task.id == id)] = task;
  }
}
