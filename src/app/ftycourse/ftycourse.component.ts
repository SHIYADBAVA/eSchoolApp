import { Component, OnInit } from '@angular/core';

export interface Timetable {
  classno:number;
  cname: string;
  subject: string;
  select: null;

}

const ELEMENT_DATA: Timetable[] = [
  {classno: 1,subject: "English", cname: 'VII A', select: null},
  {classno: 2,subject: "English", cname: 'X B', select: null},
  {classno: 3,subject: "English", cname: 'IX C', select: null},
  {classno: 5,subject: "Maths", cname: 'IX A', select: null},
  {classno: 6,subject: "English", cname: 'X A', select: null},

];
@Component({
  selector: 'app-ftycourse',
  templateUrl: './ftycourse.component.html',
  styleUrls: ['./ftycourse.component.css']
})
export class FtycourseComponent implements OnInit {
  displayedColumns: string[] = ['classno','cname', 'subject', 'select'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
