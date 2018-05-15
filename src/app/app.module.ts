import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { AppRoutingModule } from './app-routing.module'
import { UserService } from "./user-service/user.service";

import {MatButtonModule, MatInputModule} from '@angular/material';
import { DraggableDirective } from './draggable/draggable.directive';
import { DroppableDirective } from './droppable/droppable.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    WelcomePageComponent,
    DraggableDirective,
    DroppableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
