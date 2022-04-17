import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../service/data/employee-data.service';


export class Department{
  constructor(public deparId:number, public departName:string){}
}

export class Employee{
  constructor(
    public userId : number,
    public firstName: string,
    public lastName:string,
    public dob: Date,
    public email: string,
    public department: Department
  ){}
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {

  employees:Employee[] = [];
  // = [
  //   new Employee(1001,'Himanshu Sinha','himanshusinha1010@gmail.com',new Date(),'Information Technology'),
  //   new Employee(1002,'Harshita Sinha','harshitasinha2029@gmail.com',new Date(),'Marketing'),
  //   new Employee(1003,'Abhishek Sahoo','abhisheksahoo2233@gmail.com',new Date(),'Sales'),
  //   new Employee(1004,'Abhijata Sen','abhijatasen2233@gmail.com',new Date(),'Human Resource'),
  //   new Employee(1005,'Himanshu Sinha','himanshusinha1010@gmail.com',new Date(),'Information Technology'),
  //   new Employee(1006,'Harshita Sinha','harshitasinha2029@gmail.com',new Date(),'Marketing'),
  //   new Employee(1007,'Abhishek Sahoo','abhisheksahoo2233@gmail.com',new Date(),'Sales'),
  //   new Employee(1008,'Abhijata Sen','abhijatasen2233@gmail.com',new Date(),'Human Resource'),
  //   new Employee(1009,'Abhishek Sahoo','abhisheksahoo2233@gmail.com',new Date(),'Sales'),
  //   new Employee(1010,'Abhijata Sen','abhijatasen2233@gmail.com',new Date(),'Human Resource'),
  //   new Employee(1011,'Abhijata Sen','abhijatasen2233@gmail.com',new Date(),'Human Resource'),
  //   new Employee(1012,'Abhishek Sahoo','abhisheksahoo2233@gmail.com',new Date(),'Sales'),
  //   new Employee(1013,'Abhijata Sen','abhijatasen2233@gmail.com',new Date(),'Human Resource')


  // ]
  constructor(private router:Router,
    private EmployeeService:EmployeeDataService
    
    ) { }

  totalRecords!: number;
  page = 1;
  maxSize:string = "5";

  ngOnInit(): void {
    this.refreshEmployees();
  }

  refreshEmployees()
  {
    this.EmployeeService.fetchEmployeeDetails().subscribe(
      (response: any[]) => {
        this.employees = response;
        console.log(this.employees);
        this.totalRecords = this.employees.length;
      }
    )
  }


  handleAddEmployee(){
    this.router.navigate(['update/employee',-1]);
  }

  handleEditClick(id:number){
    console.log('Edit Clicked ' + id);
    this.router.navigate(['update/employee',id]);

  }
  handleDeleteClick(id:number){

    this.EmployeeService.deleteEmployee(id).subscribe(
      response => {
        this.refreshEmployees();
      }
    );
  //   console.log('delete clicked ' + id);
  //   for( var i = 0; i < this.employees.length; i++){ 
                                   
  //     if ( this.employees[i].userId === id) { 
  //         this.employees.splice(i, 1); 
  //         i--; 
  //     }
  // }
  }
}
