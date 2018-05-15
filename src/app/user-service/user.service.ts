import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

interface IUser {
	username: string,
	password: string
}

@Injectable()
export class UserService {

  constructor() { }

  saveUser(user: IUser): void {
  	localStorage.setItem('username', user.username);
    localStorage.setItem('password', user.password);
  }

  getUsername(): Observable<string> {
		return of(localStorage.getItem('username'));
  }

  isAuthenticated(): Observable<boolean> {
    return of(Boolean(localStorage.getItem('username'))).pipe()
  }
}
