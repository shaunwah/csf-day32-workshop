import {Component} from '@angular/core';
import {TaskService} from "../../task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  constructor(private taskService: TaskService) {
  }

  getTasks(showCompletedOnly = false) {
    return this.taskService.getTasks(showCompletedOnly);
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
