import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserCredential } from './user.credential.model'
import { AuthenticationService } from './authentication.service'

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnInit {
  userCredential: UserCredential;
  error: string;
  loading = false;
  returnUrl: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.userCredential = new UserCredential();
  }

   ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   }

  onSubmit() {
    this.loading = true;
    this.authenticationService.login(this.userCredential)
      .subscribe(() => this.router.navigate([this.returnUrl]),
      () => {
        this.loading = false;
        this.error = 'Invalid email or password';
      })
  }
}
