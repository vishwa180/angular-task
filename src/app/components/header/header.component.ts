import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  @Output() onToggleForm = new EventEmitter();

  toggleForm() {
    this.onToggleForm.emit();
  }
}
