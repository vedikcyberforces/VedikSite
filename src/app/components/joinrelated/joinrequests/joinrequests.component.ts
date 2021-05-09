import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-joinrequests',
  templateUrl: './joinrequests.component.html',
  styleUrls: ['./joinrequests.component.css']
})
export class JoinrequestsComponent implements OnInit {

  requests: any
  isInfoActive = false
  isLoadingActive = false
  currentRequest = {
    "firstname": "",
    "lastname": "",
    "username": "",
    "email": "",
    "phone": "",
    "_id": "",
    "time":""
  }
  constructor(private API: ApiService) { }

  ngOnInit(): void {
    this.API.postForm("/auth/join/requests", {"token":localStorage.getItem('token')}).then((value) => this.requests = value)
  }
  toggler() {
    this.isInfoActive = !this.isInfoActive;
  }
  togglerLoading(){
    this.isLoadingActive = !this.isLoadingActive
  }
  openModal(request: any) {
    console.log(request)
    this.currentRequest = request
    this.toggler();
  }
  
  Accept(_id:any){
    this.isLoadingActive = true
    this.API.postForm("/auth/join/request", {"token":localStorage.getItem('token'), "status":"A", "id":_id}).then(() => {
      this.isLoadingActive = false;
      location.reload()
    })
  }
  Reject(_id:any){
    this.isLoadingActive =true
    this.API.postForm("/auth/join/request", {"token":localStorage.getItem('token'), "status":"R", "id":_id}).then((value) => {
        this.isLoadingActive = false
        location.reload()
    })
  }
}
