import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Task } from './app.interface';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<any> {
    return this.http.get<Task[]>(environment.test + 'tasks')
  }



}
