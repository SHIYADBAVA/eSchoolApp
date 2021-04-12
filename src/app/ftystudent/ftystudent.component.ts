import { Component, OnInit } from '@angular/core';
import {FtystudentService } from '../ftystudent.service';
import { StudentModel } from './ftystudent.model';

@Component({
  selector: 'app-ftystudent',
  templateUrl: './ftystudent.component.html',
  styleUrls: ['./ftystudent.component.css']
})
export class FtystudentComponent implements OnInit {
  // Student is a model class Student Item
  students: StudentModel[] | undefined;
  constructor(private ftystudentService: FtystudentService) { }

  ngOnInit(): void {
    this.ftystudentService.getStudent().subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data));
    })
  }

}
