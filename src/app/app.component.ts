import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showAddForm: boolean = false;

  toggleForm() {
    this.showAddForm = !this.showAddForm;
  }
}
