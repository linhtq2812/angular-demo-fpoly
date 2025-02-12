import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  students: Student[] = [];

  ngOnInit(): void {
    const list: any[] = JSON.parse(localStorage.getItem('students') || '[]');
    this.students = list;
  }
}

interface Student {
  id: string;
  name: string;
  age: string;
  class: string;
  email: string;
}
