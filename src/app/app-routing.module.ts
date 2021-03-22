import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmaddclassComponent } from './admaddclass/admaddclass.component';
import { AdmclassComponent } from './admclass/admclass.component';
import { AdmcourseComponent } from './admcourse/admcourse.component';
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
        path:'home',
        component:FacultydashComponent
      },
      {
        path:'class',
        component:FtyclassComponent
      },
      {
        path:'course',
        component:FtycourseComponent
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
        path:'home',
        component:AdmindashComponent
      },
      {
        path:'class',
        component:AdmclassComponent,
        children:[
          {
            path:'addclass',
            component:AdmaddclassComponent
          },
        ]
      },
      {
        path:'student',
        component:AdmstudentComponent
      },
      {
        path:'course',
        component:AdmcourseComponent
      },
      {
        path:'faculty',
        component:AdmfacultyComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
