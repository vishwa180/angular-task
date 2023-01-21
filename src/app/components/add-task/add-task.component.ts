import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  text: string;
  day: string;
  remainder: boolean = false;

  @Output() onAddTask = new EventEmitter();

  onSubmit() {
    const newTask = {
      text: this.text,
      day: this.day,
      remainder: this.remainder,
    };
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.remainder = false;
  }
}
