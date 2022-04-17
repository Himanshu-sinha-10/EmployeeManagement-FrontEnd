import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/employee/employee.component';

@Injectable({
  providedIn: 'root'
})
export class DepartmentDataService {

  constructor(private http: HttpClient) { }

  fetchAllDepartments(): Observable<any[]>
  {
    return this.http.get<Department[]>("http://localhost:8080/api/departments");
  }

  fetchDepartmentById(id:number){
    return this.http.get<Department>(`http://localhost:8080/api/department/${id}`)
  }

  addDepartment(department:Department)
  {
    console.log(department);
    return this.http.put("http://localhost:8080/api/department/add",department);
  }

  deleteDepartmentById(id:number)
  {
    return this.http.delete(`http://localhost:8080/api/department/delete/${id}`);
  }
}
