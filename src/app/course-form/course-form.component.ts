import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course, courseKey } from '../course';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-form',
  imports: [FormsModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css',
})
export class CourseFormComponent {
  constructor(private router: Router, private http: HttpClient) {}
  courseForm = {
    id: 0,
    name: '',
    description: '',
    duration: 0,
    instructor: '',
  };

  onSubmit() {
    const courseList: Course[] = JSON.parse(
      localStorage.getItem(courseKey) || '[]'
    );
    this.http
      .post('http://localhost:3000/courses', this.courseForm)
      .subscribe((res) => {
        console.log(res);
      });
    localStorage.setItem(
      courseKey,
      JSON.stringify([
        ...courseList,
        { ...this.courseForm, id: courseList.length + 1 },
      ])
    );
    alert('Create successfully!');
    this.router.navigate(['courses']);
  }
}
