import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  // Student Login
  studentLogin(student:any)
  {
    return this.http.post<any>("http://localhost:3000/student/",student);
  }
    // Faculty Login Function
  facultyLogin(faculty:any)
  {
    return this.http.post<any>("http://localhost:3000/faculty/",faculty);
  }
  // Admin Login
  adminLogin(admin:any)
  {
    return this.http.post<any>("http://localhost:3000/admin/",admin);
  }
}
