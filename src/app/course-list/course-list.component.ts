import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Course, courseKey } from '../course';

@Component({
  selector: 'app-course-list',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  courses: Course[] = JSON.parse(localStorage.getItem(courseKey) || '[]');
}
