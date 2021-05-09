import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  islogged: any
  isJoining = false
  isErrorActive: any
  isSuccessActive: any
  async onJoin(data: Object) {
    this.isJoining = true
    this.API.postForm("/auth/join", data).then((val) => {
      console.log(val)
      if (Object.create(val).status) {
        this.isSuccessActive = true
      }
      else {
        this.isErrorActive = true
        this.isJoining =false;
      }
    })
  }

  toggler() {
    this.isErrorActive = !this.isErrorActive;
  }
  constructor(private API: ApiService, private AUTH: AuthService) {
    this.AUTH.isLoggedIn().then((val) => {
      if (val) {
        this.islogged = true
        console.log(this.islogged)
      }
    })
  }

  async ngOnInit() {

  }

}
