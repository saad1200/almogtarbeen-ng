import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginStatusService } from './login-status.service'
import { ILoginStatus } from './ilogin-status'
import { AuthenticationService } from './user-login/authentication.service';

@Component({
  selector: 'login-status-view',
  template: `
  <ul class="topbar-menu">
    <li *ngIf="!loginStatus">
        <a routerLink="/login" routerLinkActive="active">تسجيل الدخول</a>
    </li>
    <li *ngIf="loginStatus">
        <a (click)="logout()">تسجيل الخروج</a>
    </li>
    <li *ngIf="loginStatus">
        <p>{{loginStatus.name}}</p>
    </li>

  </ul>
  `,
  styleUrls: ['login-status-view.component.css']
})
export class LoginStatusViewComponent implements OnInit {
  loginStatus: ILoginStatus;

  constructor(private loginStatusService: LoginStatusService, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.updateStatus();
    this.loginStatusService.onChange().subscribe(() => this.updateStatus());
  }

  updateStatus() {
    this.loginStatus = JSON.parse(localStorage.getItem('currentUser'));
  }

  logout(){
    this.authenticationService.logout();
  }
}
