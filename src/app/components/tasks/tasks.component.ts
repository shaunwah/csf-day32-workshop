import {Component} from '@angular/core';
import {TaskService} from "../../task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks = this.taskService.getTasks();

  constructor(private taskService: TaskService) {
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
  }

}
