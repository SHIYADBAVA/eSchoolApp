import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-facultylogin',
  templateUrl: './facultylogin.component.html',
  styleUrls: ['./facultylogin.component.css']
})
export class FacultyloginComponent implements OnInit {
  constructor(private _auth:AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  Faculty={
    username:"",
    password:""
  }
  // Faculty Login Function
  facultyLogin()
  {
    this._auth.facultyLogin(this.Faculty)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['/faculty/home'])
      }
    )
  }

}






