import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { RlServiceComponent } from './rl-service/rl-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { UpdateDpartmentComponent } from './update-dpartment/update-dpartment.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    EmployeeComponent,
    DepartmentComponent,
    RlServiceComponent,
    UpdateemployeeComponent,
    UpdateDpartmentComponent
    
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,  //to use [(ngModel)] for two way data binding, import this
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
