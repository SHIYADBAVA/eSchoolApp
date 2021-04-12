import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentnavComponent } from './studentnav/studentnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyloginComponent } from './facultylogin/facultylogin.component';
import { FacultynavComponent } from './facultynav/facultynav.component';
import { FacultydashComponent } from './facultydash/facultydash.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { TimetableComponent } from './timetable/timetable.component';
import { MatTableModule } from '@angular/material/table';
import { StdattendanceComponent } from './stdattendance/stdattendance.component';
import { StdperformanceComponent } from './stdperformance/stdperformance.component';
import { StdassignmentComponent } from './stdassignment/stdassignment.component';
import { FtyclassComponent } from './ftyclass/ftyclass.component';
import { FtycourseComponent } from './ftycourse/ftycourse.component';
import { AdmclassComponent } from './admclass/admclass.component';
import { AdmstudentComponent } from './admstudent/admstudent.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdmfacultyComponent } from './admfaculty/admfaculty.component';
import { AdmaddclassComponent } from './admaddclass/admaddclass.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FtystudentComponent } from './ftystudent/ftystudent.component';
import { AdmaddComponent } from './admadd/admadd.component';
import { AdmaddstdComponent } from './admaddstd/admaddstd.component';
import { HttpClientModule } from '@angular/common/http';
import { AdmaddftyComponent } from './admaddfty/admaddfty.component';
import { AdmstudentService } from './admstudent.service';
import { FacultylistService } from './facultylist.service';
import { AuthService } from './auth.service';
import { FtystudentService } from './ftystudent.service';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StudentComponent,
    StudentnavComponent,
    StudentloginComponent,
    StudentdashComponent,
    FacultyComponent,
    FacultyloginComponent,
    FacultynavComponent,
    FacultydashComponent,
    AdminComponent,
    AdminloginComponent,
    AdminnavComponent,
    AdmindashComponent,
    TimetableComponent,
    StdattendanceComponent,
    StdperformanceComponent,
    StdassignmentComponent,
    FtyclassComponent,
    FtycourseComponent,
    AdmclassComponent,
    AdmstudentComponent,
    AdmfacultyComponent,
    AdmaddclassComponent,
    FtystudentComponent,
    AdmaddComponent,
    AdmaddstdComponent,
    AdmaddftyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AdmstudentService, FacultylistService, AuthService, FtystudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
