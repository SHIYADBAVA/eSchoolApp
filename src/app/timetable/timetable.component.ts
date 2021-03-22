import { Component, OnInit } from '@angular/core';


export interface Timetable {
  day: string;
  period1: string;
  period2: string;
  period3: string;
  period4: string;
}

const ELEMENT_DATA: Timetable[] = [
  {day: "Monday", period1: 'Maths', period2: 'Hindi', period3: 'Chemistry', period4:"English"},
  {day: "Tuesday", period1: 'Chemistry', period2: 'English', period3: 'Physics', period4:"Maths"},
  {day: "Wednesday", period1: 'Physics', period2: 'Physics', period3: 'English', period4:"Hindi"},
  {day: "Thursday", period1: 'English', period2: 'Maths', period3: 'Chemistry', period4:"Physics"},
  {day: "Friday", period1: 'Physics', period2: 'Chemistry', period3: 'Hindi', period4:"English"},
];
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  displayedColumns: string[] = ['day', 'period1', 'period2', 'period3', 'period4'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
