import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  username: string = '';
  password: string = '';
  newUsername: string = '';
  newPassword: string = '';

  greeting: string = '';
  loginTime: string = '';
  isLoginMode: boolean = true;

  accounts: { 
    username: string; 
    password: string; 
    email: string; 
    course: string; 
    yearSection: string; 
  }[] = [];

  login() {
    if (this.username && this.password) {
      this.greeting = `Hello ${this.username}`;
      this.loginTime = moment().format('MMMM Do YYYY, h:mm:ss A');
    }
  }

  signup() {
    if (this.newUsername && this.newPassword) {
      this.greeting = `Account created for ${this.newUsername}`;
      this.loginTime = moment().format('MMMM Do YYYY, h:mm:ss A');

      
      this.accounts.push({
        username: this.newUsername,
        password: this.newPassword,
        email: `${this.newUsername.toLowerCase()}@example.com`,
        course: 'BSIT',
        yearSection: '3-A'
      });

      this.newUsername = '';
      this.newPassword = '';
      this.isLoginMode = true;
    }
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.greeting = '';
  }
}

