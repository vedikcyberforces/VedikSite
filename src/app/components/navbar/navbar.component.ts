import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActive = false;
  isLogin = false;

  hideNav(){
    this.isActive = false;
  }

  constructor(private AUTH: AuthService, private router : Router) {
    this.AUTH.isLoggedIn().then((val) => {
      this.isLogin = val;
    })

    this.router.events.subscribe(()=>{
      this.isActive = false;
    })
  }
  async ngOnInit() {
    await this.AUTH.isLoggedIn().then((val) => {
      this.isLogin = val;
    })
  }

}
