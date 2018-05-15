import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginRouteGuardService } from './login-route-guard/login-route-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'authenticated', component: WelcomePageComponent, canActivate: [ LoginRouteGuardService ] },
  { path: '',  redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [ LoginRouteGuardService ]
})
export class AppRoutingModule { }
