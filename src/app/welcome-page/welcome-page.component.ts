import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UserService } from "../user.service";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
	public username: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  	this.username = this.userService.getUsername();
  }

  logOut(): void {
  		localStorage.clear();
  		this.router.navigate([ 'login' ]);
  }
}
