import { Component, OnInit } from '@angular/core';
import { AdmstudentService } from '../admstudent.service';
import { StudentModel } from '../admstudent/admstudent.model';



@Component({
  selector: 'app-admstudent',
  templateUrl: './admstudent.component.html',
  styleUrls: ['./admstudent.component.css']
})
export class AdmstudentComponent implements OnInit {
  // Student is a model class for Student Item
  students: StudentModel[] | undefined;
  constructor(private admstudentService: AdmstudentService) { }

  ngOnInit(): void {
    this.admstudentService.getStudents().subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data));
    })
  }

}




// const ELEMENT_DATA: Timetable[] = [
//   {classno: 1,subject: "English", cname: 'VII A', select: null},
//   {classno: 2,subject: "English", cname: 'X B', select: null},
//   {classno: 3,subject: "English", cname: 'IX C', select: null},
//   {classno: 5,subject: "Maths", cname: 'IX A', select: null},
//   {classno: 6,subject: "English", cname: 'X A', select: null},

// ];


