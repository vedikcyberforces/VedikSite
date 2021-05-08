import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isModalActive = false;
  isLogin = false;
  constructor(private AUTH: AuthService, private router: Router) {
    AUTH.isLoggedIn().then((val) => {
      if (val) {
        this.isModalActive = true
        this.isLogin = true;
      }
    })
  }
  Login(data: any) {
    this.AUTH.Login(data)
    this.isModalActive = true;
  }
  LogOut(){
    console.log("run");
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  ngOnInit(): void {
  }

}
