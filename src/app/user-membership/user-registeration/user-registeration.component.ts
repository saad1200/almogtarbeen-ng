import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserRegisteration } from './user-registeration.model'
import { UserRegisterationService } from './user-registeration.service'


@Component({
  selector: 'user-registeration',
  templateUrl: './user-registeration.component.html'
})
export class UserRegisterationComponent {
  userRegisteration: UserRegisteration;
  error: string;

  constructor(
    private router: Router,
    private userRegisterationService: UserRegisterationService) {
    this.userRegisteration = new UserRegisteration();
  }
  
  onSubmit() { 
    this.userRegisterationService.register(this.userRegisteration)
        .subscribe(() => this.router.navigate(['/login']), () => this.error = 'Invalid user registration');
    
  }
}
