import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {Menu} from "primeng/components/menu/menu";
import {ActivatedRoute, Router} from "@angular/router";
import { AuthenticationService } from './user-membership/user-login/authentication.service';
import { LoginStatusService } from './user-membership/login-status.service';

declare var jQuery :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuItems: MenuItem[];

  @ViewChild('bigMenu') bigMenu : Menu;
  @ViewChild('smallMenu') smallMenu : Menu;

  constructor(
    private router : Router, 
    private authenticationService: AuthenticationService,
    private loginStatusService: LoginStatusService) {

  }

  ngOnInit() {
    this.buildMenu();
    this.loginStatusService.onChange().subscribe(() => this.buildMenu());
  }

  buildMenu() {
    this.menuItems = [];

    this.menuItems.push({
          label: 'جريدة صوت المغتربين',
          icon: 'fa-home',
          routerLink: [''],
          styleClass: 'menuitem'
      }
    );

    let user = JSON.parse(localStorage.getItem('currentUser'));
    if(user) {
      this.menuItems.push({
          label: 'صفحتي',
          icon: 'fa-id-card-o',
          routerLink: ['/dashboard/' + user.id]
      });

      this.menuItems.push({
          label: 'إضافة مقالة',
          icon: 'fa-plus-square-o',
          routerLink: ['/article/create']
      });
      
      this.menuItems.push({
          label: 'تسجيل الخروج',
          icon: 'fa-sign-out',
          routerLink: [''],
          command: (event) => this.authenticationService.logout()
      });
    } else {
      this.menuItems.push({
        label: 'تسجيل الدخول',
        icon: 'fa-sign-in',
        routerLink: ['/login'],
        command: (event) => this.authenticationService.logout()
      });
    }
  }

}