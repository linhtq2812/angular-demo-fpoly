import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course, courseKey } from '../course';

@Component({
  selector: 'app-course-detail',
  imports: [RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  public courseDetail: Course | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.courseDetail = (
      JSON.parse(localStorage.getItem(courseKey) || '[]') as Course[]
    ).find((course) => course.id === +id);
  }
}
