import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

import { AuthService } from './../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'register',
  template: `
    <div>
      <auth-form (submitted)="registerUser($event)">
        <h1>Register</h1>
        <a routerLink="/auth/login">Already have an account?</a>
        <button type="submit">Create account</button>
        <div class="error" *ngIf="error">
          {{error}}
        </div>
      </auth-form>
    </div>
  `
})
export class RegisterComponent {

  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async registerUser(event: FormGroup) {
    try {
      const { email, password } = event.value;
      await this.authService.createUser(email, password);
      this.router.navigate(['/']);
    } catch (e) {
      this.error = e.message;
    }
  }
}
