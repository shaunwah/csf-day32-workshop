import {Component} from '@angular/core';
import {TaskService} from "../../task.service";
import {Task} from "../../task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  constructor(private taskService: TaskService) {
  }

  getTasks(showAll = false) {
    const tasks = this.taskService.getTasks()
      .sort((a, b) => {
        let weight = (t: Task) => (t.priority == 'high') ? 3 : (t.priority == 'medium') ? 2 : 1;
        return weight(b) - weight(a);
      });

    if (showAll) {
      return tasks.filter(task => !task.isCompleted);
    }
    return tasks.filter(task => task.isCompleted);
  }

  completeTask(id: number) {
    this.taskService.completeTask(id);
  }

  incompleteTask(id: number) {
    this.taskService.incompleteTask(id);
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
  }

}
