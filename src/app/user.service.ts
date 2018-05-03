import { Injectable } from '@angular/core';

interface IUser {
	username: string,
	password: string
}

@Injectable()
export class UserService {

  constructor() { }

  saveUser(user: IUser): void {
  	localStorage.setItem("username", user.username);
    localStorage.setItem("password", user.password);
  }

  getUsername(): string {
		return localStorage.getItem("username");
  }
}
