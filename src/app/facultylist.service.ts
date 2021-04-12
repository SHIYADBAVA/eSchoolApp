import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultylistService {

  constructor(private http:HttpClient) { }
  getFaculty()
  {
    this.http.get('http://localhost:3000/admin/faculty');
  }
}
