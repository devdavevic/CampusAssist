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
  greeting: string = '';
  loginTime: string = '';

  login() {
    if (this.username && this.password) {
      this.greeting = `Hello ${this.username}`;
      this.loginTime = moment().format('MMMM Do YYYY, h:mm:ss A');
    }
  }
}