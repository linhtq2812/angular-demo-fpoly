import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course, courseKey } from '../course';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-detail',
  imports: [RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  public courseDetail: Course | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.http
      .get<Course | undefined>(`http://localhost:3000/courses/${id}`)
      .subscribe((course) => {
        console.log(course);
        this.courseDetail = course;
      });
  }
}
