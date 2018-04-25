import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
	loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
  	this.loginForm = this.fb.group({
   		username: ['', [
   			Validators.required
   		]],
 			password: ['', [
 				Validators.required
 			]]
  	});
  }

	public logIn(): void {
	 this.router.navigate([ 'authenticated' ]);
	}
}
