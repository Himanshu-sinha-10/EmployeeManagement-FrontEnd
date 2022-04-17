import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/employee/employee.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http: HttpClient) { }

  fetchEmployeeDetails(): Observable<any[]> 
  {

   return this.http.get<Employee[]>('http://localhost:8080/api/employees');
  }

  deleteEmployee(id:number)
  {
    return this.http.delete(`http://localhost:8080/api/employee/delete/${id}`);
  }

  addEmployee(emp:Employee)
  {
    return this.http.post('http://localhost:8080/api/employee/add',emp);
  }

  fetchEmployeeById(id:number): Observable<Employee>
  {
    return this.http.get<Employee>(`http://localhost:8080/api/employee/${id}`);
  }

  updateEmployee(employee:Employee)
  {
    return this.http.put(`http://localhost:8080/api/employee/update`,employee);
  }
}
