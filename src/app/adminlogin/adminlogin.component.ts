import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  constructor(private _auth:AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  // Admin Login Object
  Admin={
    username:"",
    password:""
  }
  // admin Login Function
  adminLogin()
  {
    this._auth.adminLogin(this.Admin)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['/admin/home'])
      }
    )
  }


}
