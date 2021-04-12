import { Component, OnInit } from '@angular/core';

export interface Timetable {
  classno:number;
  cname: string;
  no_ofstudent:number;
  select: null;

}

const ELEMENT_DATA: Timetable[] = [
  {classno: 1,no_ofstudent: 30, cname: 'VII A', select: null},
  {classno: 2,no_ofstudent: 32, cname: 'X B', select: null},
  {classno: 3,no_ofstudent: 40, cname: 'IX C', select: null},
  {classno: 5,no_ofstudent: 29, cname: 'IX A', select: null},
  {classno: 6,no_ofstudent: 37, cname: 'X A', select: null},

];
@Component({
  selector: 'app-ftyclass',
  templateUrl: './ftyclass.component.html',
  styleUrls: ['./ftyclass.component.css']
})
export class FtyclassComponent implements OnInit {
  displayedColumns: string[] = ['classno','cname', 'no_ofstudent', 'select'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
