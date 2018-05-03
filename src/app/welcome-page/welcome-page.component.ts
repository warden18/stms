import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('usernameEl') 
  private usernameEl: any;

  @ViewChild('userImg') 
  private userImg: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
	   this.userService.getUsername()
       .subscribe(username => this.username = username);
  }

  logOut(): void {
      localStorage.clear();

  		const usernameCoords = this.usernameEl.nativeElement.getBoundingClientRect();
      const userImgCoords = this.userImg.nativeElement.getBoundingClientRect();

      localStorage.setItem('usernameCoords', JSON.stringify(usernameCoords));
      localStorage.setItem('userImgCoords', JSON.stringify(userImgCoords));
  		this.router.navigate([ 'login' ]);
  }
}
