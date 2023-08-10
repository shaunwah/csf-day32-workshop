import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, ValidationErrors, Validators} from '@angular/forms';
import { TaskService } from "../../task.service";
import {Task} from "../../task";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  tasks = this.taskService.getTasks();

  taskForm = this.formBuilder.group({
    description: ['', [Validators.required, Validators.minLength(5)]],
    priority: ['low', [Validators.required]],
    due: ['', [Validators.required, this.duePastDateValidator]]
  })

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.taskService.addTask(this.taskForm.value as Task)
  }

  duePastDateValidator(control: AbstractControl) {
    const date = Date.parse(control.value);
    const dateNow = new Date().setUTCHours(0, 0, 0, 0);
    return date < dateNow ? {duePastDate: {value: control.value}} as ValidationErrors : null;
  }

  get description() { return this.taskForm.get('description'); }
  get priority() { return this.taskForm.get('priority'); }

  get due() { return this.taskForm.get('due'); }

}
