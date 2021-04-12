import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmstudentService {

  constructor(private http:HttpClient) { }
  getStudents()
  {
    return this.http.get("http://localhost:3000/admin/student/");
  }
  newAddStudent(item: any)
  {
    return this.http.post("http://localhost:3000/admin/addstudent/",{'student':item})
    .subscribe(data=>{console.log(data)})
  }
}
