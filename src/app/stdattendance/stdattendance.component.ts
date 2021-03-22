import { Component, OnInit } from '@angular/core';

export interface Timetable {
  subject: string;
  attendance: number;

}

const ELEMENT_DATA: Timetable[] = [
  {subject: "English", attendance: 100},
  {subject: "Hindi", attendance: 100},
  {subject: "Physics", attendance: 85},
  {subject: "Chemistry", attendance: 90},
  {subject: "Maths", attendance: 79},

];
@Component({
  selector: 'app-stdattendance',
  templateUrl: './stdattendance.component.html',
  styleUrls: ['./stdattendance.component.css']
})
export class StdattendanceComponent implements OnInit {
  displayedColumns: string[] = ['subject', 'attendance'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
