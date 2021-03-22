import { Component, OnInit } from '@angular/core';

export interface Timetable {
  subject: string;
  exam1: number;
  exam2: number;

}

const ELEMENT_DATA: Timetable[] = [
  {subject: "English", exam1: 100, exam2: 78},
  {subject: "Hindi", exam1: 100, exam2: 88},
  {subject: "Physics", exam1: 85, exam2: 69},
  {subject: "Chemistry", exam1: 90, exam2: 84},
  {subject: "Maths", exam1: 79, exam2: 80},

];

@Component({
  selector: 'app-stdperformance',
  templateUrl: './stdperformance.component.html',
  styleUrls: ['./stdperformance.component.css']
})
export class StdperformanceComponent implements OnInit {
  displayedColumns: string[] = ['subject', 'exam1', 'exam2'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
