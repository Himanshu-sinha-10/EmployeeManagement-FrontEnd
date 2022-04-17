
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../employee/employee.component';
import { DepartmentDataService } from '../service/data/department-data.service';

@Component({
  selector: 'app-update-dpartment',
  templateUrl: './update-dpartment.component.html',
  styleUrls: ['./update-dpartment.component.css']
})
export class UpdateDpartmentComponent implements OnInit {

  constructor(
    private departmentService: DepartmentDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  department !: Department;
  dept!: string;
  id!:number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.department = new Department(0,"");
    if(this.id != -1)
    {
      this.departmentService.fetchDepartmentById(this.id).subscribe(
          response => { this.department = response;
          console.log(this.department); }
        )
    }
  }

  handleSaveClick()
  {
   
    // this.department.departName = this.dept;
    console.log(this.department);
    this.departmentService.addDepartment(this.department).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome/department']);
      }
    )
    console.log("Save clicked");

  }

}
