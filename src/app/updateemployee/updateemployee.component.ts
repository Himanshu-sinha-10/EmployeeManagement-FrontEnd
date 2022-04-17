import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, Employee } from '../employee/employee.component';
import { DepartmentDataService } from '../service/data/department-data.service';
import { EmployeeDataService } from '../service/data/employee-data.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeDataService,
    private departmentService: DepartmentDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  id !: number;
  d!: Department;
  employee !: Employee;
  departments!: Department[];


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee(0, '', '', new Date(), '', this.d);
    this.departmentService.fetchAllDepartments().subscribe(
      (response: any[]) => {
        this.departments = response;
      })


    if (this.id != -1) {
      this.employeeService.fetchEmployeeById(this.id).subscribe(
        response => { this.employee = response; }
      )


    }


  }


  handleSaveClick() {

    this.employeeService.updateEmployee(this.employee).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome/employee']);
      }
    )
  }

}

