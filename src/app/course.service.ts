import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/courses';

  getList(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

  create(body: Course): Observable<Course> {
    return this.http.post<Course>(this.url, body);
  }
}
