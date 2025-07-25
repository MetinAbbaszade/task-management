import { Component, signal } from '@angular/core';
import { AppService } from './app-service';
import { Task } from './app.interface';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('task-management-ui');
  datas: Task[] = [];

  constructor(
    private service: AppService
  ) {
    this.fetchDatas()
  }

  fetchDatas() {
    return this.service.getTasks()
      .subscribe((data) => {
        console.log("SAlam" + data)
        return this.datas = data
      })
  }
}
