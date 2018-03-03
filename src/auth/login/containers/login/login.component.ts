import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

import { AuthService } from './../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  template: `
    <div>
      <auth-form (submitted)="loginUser($event)">
        <h1>Login</h1>
        <a routerLink="/auth/register">Not registered?</a>
        <button type="submit">Login</button>
        <div class="error" *ngIf="error">
          {{error}}
        </div>
      </auth-form>
    </div>
  `
})
export class LoginComponent {
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async loginUser(event: FormGroup) {
    try {
      const { email, password } = event.value;
      await this.authService.loginUser(email, password);
      this.router.navigate(['/']);
    } catch (e) {
      this.error = e.message;
    }
  }
}
