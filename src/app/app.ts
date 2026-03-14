import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  username: string = '';
  password: string = '';
  newUsername: string = '';
  newPassword: string = '';
  signupForm: FormGroup;

  greeting: string = '';
  loginTime: string = '';
  isLoginMode: boolean = true;
  showDashboard: boolean = false;
  currentPage: string = 'dashboard';
  

  accounts: { 
    username: string; 
    password: string; 
    email: string; 
    course: string; 
    yearSection: string; 
  }[] = [];

  constructor(private fb: FormBuilder) {
  this.signupForm = this.fb.group({
    newUsername: ['', [Validators.required, Validators.minLength(4), Validators.email]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
}

login() {
  if (this.username && this.password) {
    this.greeting = `Hello ${this.username}`;
    this.loginTime = moment().format('MMMM Do YYYY, h:mm:ss A');
    this.showDashboard = true;
  }
}

navigate(page: string) {
  this.currentPage = page;
}

signup() {

  if (this.signupForm.invalid) {
    this.signupForm.markAllAsTouched();
    return;
  }

  const username = this.signupForm.get('newUsername')?.value;
  const password = this.signupForm.get('newPassword')?.value;

  console.log(username);
  console.log(password);

  this.greeting = `Account created for ${username}`;
  this.loginTime = moment().format('MMMM Do YYYY, h:mm:ss A');

  this.accounts.push({
    username: username,
    password: password,
    email: `${username.toLowerCase()}@example.com`,
    course: 'BSIT',
    yearSection: '3-A'
  });

  this.signupForm.reset();
  this.isLoginMode = true;
}

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.greeting = '';
  }
}

