
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../employee/employee.component';
import { DepartmentDataService } from '../service/data/department-data.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(
    private departmentService:DepartmentDataService,
    private router:Router
    ) { }

  totalRecords!: number;
  page = 1;
  maxSize:string = "5";
  departments!: Department[];
  

  ngOnInit(): void {

  this.refreshDepartments();
  }


  refreshDepartments(){
    this.departmentService.fetchAllDepartments().subscribe(
      (response: any[]) => {

        this.departments = response;
        this.totalRecords = this.departments.length;
      })
  }
  handleEditClick(id:number){
   console.log("edit" + id);
   this.router.navigate(['update/department/',id]);
  }

  handleDeleteClick(id:number){
    this.departmentService.deleteDepartmentById(id).subscribe(
      data => {
        console.log(data);
        this.refreshDepartments();
      }
    )
   }

  handleAddDepartment(){
        this.router.navigate(['update/department/',-1]);
  }

}
