import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginRouteGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): Observable<boolean> {
		return this.userService.isAuthenticated()
			.map(isLoggedIn => {
		    if (!isLoggedIn) {
		    	this.router.navigate([ "login" ]);
		    }

		    return isLoggedIn;
			})
  }
}
