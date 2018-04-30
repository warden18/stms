import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  saveUser(user: any): any {
  	localStorage.setItem("username", user.username);
    localStorage.setItem("password", user.password);
  }

  getUsername(): any {
		return localStorage.getItem("username");
  }
}
