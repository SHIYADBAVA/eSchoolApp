import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FtystudentService {

  constructor(private http:HttpClient) { }
  getStudent()
  {
    return this.http.get("http://localhost:3000/faculty/student/");
  }
}
