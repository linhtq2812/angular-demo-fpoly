import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Course, courseKey } from '../course';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent implements OnInit {
  constructor(private http: HttpClient, private courseService: CourseService) {}

  courses: Course[] = [];

  ngOnInit(): void {
    this.courseService.getList().subscribe((item) => {
      this.courses = item;
    });
  }
}
