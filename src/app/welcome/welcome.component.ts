import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router,public hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  isUserLoggedIn = false;
  ngOnInit(): void {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn(); 
     
  }

 

  handleEmployeeClick(){
    this.router.navigate(['welcome/employee']);
  }

  handleDepartmentClick(){
    this.router.navigate(['welcome/department']);
  }

  handleComplianceClick(){
    this.router.navigate(['welcome/compliance']);
  }

}
