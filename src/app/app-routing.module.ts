import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RlServiceComponent } from './rl-service/rl-service.component';
import { UpdateDpartmentComponent } from './update-dpartment/update-dpartment.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'welcome/employee', component: EmployeeComponent},
  {path: 'welcome/department', component: DepartmentComponent},
  {path: 'welcome/compliance', component: RlServiceComponent},
  {path: 'update/employee/:id', component: UpdateemployeeComponent},
  {path: 'update/department/:id', component: UpdateDpartmentComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
