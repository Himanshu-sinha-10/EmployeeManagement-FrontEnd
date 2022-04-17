import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
   

    if(username === 'himanshusinha1010@gmail.com' && password === '1234')
    {
      sessionStorage.setItem('currentUser', username);
    return true;
    }
    else
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('currentUser');
    return !(user === null);
  }
}

