import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateHome() {
    this.router.navigate(['/home']);
  }
  navigateLogin() {
    this.router.navigate(['/login']);
  }
}
