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
  isWrongActive = false;
  isLoging = false
  constructor(private AUTH: AuthService, private router: Router) {
    this.AUTH.isLoggedIn().then((val) => {
      if (val) {
        this.isModalActive = true
        this.isLogin = true;
      }
    })
  }
async  Login(data: any) {
  this.isLoging = true;
    this.AUTH.Login(data).then(()=>{
      this.AUTH.isLoggedIn().then((val)=>{
        if(val){
          location.reload()
        }
        else{
          this.isLoging = false;
          this.isWrongActive = true
        }
      })
    })
    
  }
  LogOut() {
    this.AUTH.LogOut()
  }

  //toggels the you are logged in moodal
  toggler() {
    this.isModalActive = !this.isModalActive;
  }

  //Toggles the wrong Id or password modal
  togglerWrong() {
    this.isWrongActive = !this.isWrongActive;
  }
  ngOnInit(): void {
  }

}
