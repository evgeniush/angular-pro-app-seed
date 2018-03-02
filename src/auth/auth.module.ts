import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared modules
import { SharedModule } from './shared/shared.module';

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyA6bqoRAYpxGUzkFQxcJaQNGQU6n7OOp68",
  authDomain: "fitness-app-62e64.firebaseapp.com",
  databaseURL: "https://fitness-app-62e64.firebaseio.com",
  projectId: "fitness-app-62e64",
  storageBucket: "fitness-app-62e64.appspot.com",
  messagingSenderId: "488978362317"
};

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
