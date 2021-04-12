import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  

  Student={
    username:"",
    password: "",
  }

  constructor(private _auth: AuthService, private _router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // Student Login Function 
  studentLogin()
  {
    this._auth.studentLogin(this.Student)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['/student/home'])
      }
    )
  }
}
