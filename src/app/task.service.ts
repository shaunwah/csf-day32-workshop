import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];
  id: number = 1;
  weight = (t: Task): number => this.weights[t.priority];
  weights: {[index: string]: number} = {
    high: 3,
    medium: 2,
    low: 1
  };

  getTasks(showCompletedOnly = false): Task[] {
    const tasks = this.tasks
      .sort((a, b) => {
        return this.weight(b) - this.weight(a);
      });

    if (showCompletedOnly) {
      return tasks.filter(task => task.isCompleted);
    }
    return tasks.filter(task => !task.isCompleted);
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
