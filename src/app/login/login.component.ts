import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage!: string;

  constructor(private router: Router) {}

  onClick() {
    if (this.username === '' || this.password === '') {
      this.errorMessage = 'Username and password canot be empty';
      return;
    }

    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/admin']);
      return;
    }

    if (this.username === 'albert' && this.password === 'albert') {
      this.router.navigate(['/customer']);
      return;
    }

    this.errorMessage = 'Username or password is wrong!';
  }
}
