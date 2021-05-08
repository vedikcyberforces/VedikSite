import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private API: ApiService, private router: Router) { }
  private logged: any


  async isLoggedIn() {
    if (localStorage.getItem("token")) {
      await this.API.postForm("/auth/login/verify", { "token": localStorage.getItem("token")?.toString() }).then((value) => {
        this.logged = Object.create(value).status;
      }).catch((err) => { return err })
      return this.logged;
    }
    else {
      console.log("token not found too early")
    }
  }

  //Login Function
  async Login(data: any){
    //postForm returns a token that we can store in the localstorage for further authentication use
    await this.API.postForm("/auth/login", data).then((val) => {
      if (Object.create(val).status) {
        localStorage.setItem("token", Object.create(val).status)
      }
      else{
        console.log("Wrong Id Or Password")
      }
    }).catch((err) => console.log(err))
  }

  LogOut(){
    localStorage.clear()
    location.reload()
  }

}
