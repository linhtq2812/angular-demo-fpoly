import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseFormComponent } from './course-form/course-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  {
    path: 'students',
    component: StudentListComponent,
  },
  {
    path: 'students/create',
    component: StudentCreateComponent,
  },
  {
    path: 'courses',
    component: CourseListComponent,
  },
  {
    path: 'courses/:id/detail',
    component: CourseDetailComponent,
  },
  {
    path: 'courses/create',
    component: CourseFormComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
