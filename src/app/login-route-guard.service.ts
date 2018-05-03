import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginRouteGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean {
    const isLoggedIn = Boolean(this.userService.getUsername());
    if (!isLoggedIn) {
    	this.router.navigate([ "login" ]);
    }

    return isLoggedIn;
  }
}
