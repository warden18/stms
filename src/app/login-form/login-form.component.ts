import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from "../user.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
	loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
  	this.loginForm = this.fb.group({
   		username: ['', [
   			Validators.required,
        Validators.maxLength(16)
   		]],
 			password: ['', [
 				Validators.required
 			]]
  	});
  }

	public logIn(username: string, password: string): void {
    this.userService.saveUser({ username, password });
 		this.router.navigate([ 'authenticated' ]);
	}
}
