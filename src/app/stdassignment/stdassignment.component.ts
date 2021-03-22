import { Component, OnInit } from '@angular/core';

export interface Timetable {
  AssignNo:number;
  subject: string;
  topic: string;
  status: string;
  select: null;

}

const ELEMENT_DATA: Timetable[] = [
  {AssignNo: 1,subject: "English", topic: 'Write Short Note on Drama?', status: "Not Submitted", select: null},
  {AssignNo: 2,subject: "Hindi", topic: 'Write Short Note on Kabeer Das?', status: "Not Submitted", select: null},
  {AssignNo: 3,subject: "Physics", topic: 'Explain about Newton Laws of motion?', status: "Not Submitted", select: null},
  {AssignNo: 4,subject: "Chemistry", topic: 'Write Short Note on Organic Compounds?', status: "Not Submitted", select: null},
  {AssignNo: 5,subject: "Maths", topic: 'Explain Eulers theorem?', status: "Not Submitted", select: null},

];
@Component({
  selector: 'app-stdassignment',
  templateUrl: './stdassignment.component.html',
  styleUrls: ['./stdassignment.component.css']
})
export class StdassignmentComponent implements OnInit {
  displayedColumns: string[] = ['AssignNo','subject', 'topic', 'status', 'select'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
