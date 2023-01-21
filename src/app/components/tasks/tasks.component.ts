import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  toggleRemainder(task: Task) {
    this.taskService.toggleRemainder(task).subscribe((newTask: Task) => {
      this.tasks = this.tasks.map((t) => {
        if (t.id !== newTask.id) return t;
        else return newTask;
      });
    });
  }

  onAddTask(task: Task) {
    this.taskService.addTask(task).subscribe((newTask: Task) => {
      this.tasks.push(newTask);
    });
  }
}
