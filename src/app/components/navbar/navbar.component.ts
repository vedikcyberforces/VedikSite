import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActive = false;
  isLogin = false;
  constructor(private AUTH: AuthService) {
    this.AUTH.isLoggedIn().then((val) => {
      this.isLogin = val;
    })
  }
  async ngOnInit() {
    await this.AUTH.isLoggedIn().then((val) => {
      this.isLogin = val;
    })
  }
}
