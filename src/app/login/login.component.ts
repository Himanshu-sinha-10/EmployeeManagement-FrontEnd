import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = '*Ivalid Credentials'
  invalidCredentials = false
             //this is dependency injection
  constructor(private router: Router,
              public hardcodedAuthenticationService: HardcodedAuthenticationService) 
              { }
  

    isUserLoggedIn = false;
  ngOnInit(): void {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

  handleLogin() : void{
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.invalidCredentials = false;
      this.router.navigate(['welcome']);

    }
    else this.invalidCredentials = true;

  }



}
