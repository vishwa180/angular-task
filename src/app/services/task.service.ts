import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks/';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}${task.id}`;
    return this.http.delete<Task>(url);
  }

  toggleRemainder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}${task.id}`;
    return this.http.put<Task>(url, { ...task, remainder: !task.remainder });
  }

  addTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}`;
    return this.http.post<Task>(url, { ...task });
  }
}
