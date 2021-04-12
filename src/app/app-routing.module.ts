import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmaddclassComponent } from './admaddclass/admaddclass.component';
import { AdmclassComponent } from './admclass/admclass.component';
import { AdmfacultyComponent } from './admfaculty/admfaculty.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmstudentComponent } from './admstudent/admstudent.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultydashComponent } from './facultydash/facultydash.component';
import { FacultyloginComponent } from './facultylogin/facultylogin.component';
import { FtyclassComponent } from './ftyclass/ftyclass.component';
import { FtycourseComponent } from './ftycourse/ftycourse.component';
import { StdassignmentComponent } from './stdassignment/stdassignment.component';
import { StdattendanceComponent } from './stdattendance/stdattendance.component';
import { StdperformanceComponent } from './stdperformance/stdperformance.component';
import { StudentComponent } from './student/student.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { TimetableComponent } from './timetable/timetable.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FtystudentComponent } from './ftystudent/ftystudent.component';
import { AdmaddstdComponent } from './admaddstd/admaddstd.component';
import { AdmaddftyComponent } from './admaddfty/admaddfty.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'student',
    component:StudentloginComponent
  },
  {
    path:'student',
    component:StudentComponent,
    children:[
      {
        path:'home',
        component:StudentdashComponent
      },
    ]
  },
  {
    path:'student',
    component:StudentComponent,
    children:[
      {
        path:'login',
        component:StudentdashComponent
      },      
      {
        path:'timetable',
        component:TimetableComponent
      },
      {
        path:'attendance',
        component:StdattendanceComponent
      },
      {
        path:'performance',
        component:StdperformanceComponent
      },
      {
        path:'assignments',
        component:StdassignmentComponent
      },
    ]
  },
  {
    path:'faculty',
    component:FacultyloginComponent
  },
  {
    path:'faculty',
    component:FacultyComponent,
    children:[
      {
        path:'login',
        component:FacultydashComponent
      },
      {
        path:'home',
        component:FacultydashComponent
      },
      {
        path:'timetable',
        component:FtycourseComponent
      },
      {
        path:'student',
        component:FtystudentComponent
      },
    ]
  },
  {
    path:'admin',
    component:AdminloginComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'login',
        component:AdmindashComponent
      },
      {
        path:'home',
        component:AdmindashComponent
      },
      {
        path:'student',
        component:AdmstudentComponent
      },
      {
        path:'addstudent',
        component:AdmaddstdComponent
      },
      {
        path:'faculty',
        component:AdmfacultyComponent
      },
      {
        path:'addfaculty',
        component:AdmaddftyComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
