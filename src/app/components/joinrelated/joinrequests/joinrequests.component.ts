import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-joinrequests',
  templateUrl: './joinrequests.component.html',
  styleUrls: ['./joinrequests.component.css']
})
export class JoinrequestsComponent implements OnInit {

  requests: any
  isInfoActive: any
  currentRequest = {
    "firstname": "",
    "lastname": "",
    "username": "",
    "email": "",
    "phone": "",
    "id": ""
  }
  constructor(private API: ApiService) { }

  ngOnInit(): void {
    this.API.getData("/auth/join").then((value) => this.requests = value)
  }
  toggler() {
    this.isInfoActive = !this.isInfoActive;
  }
  openModal(request: any) {
    console.log(request)
    this.currentRequest = request
    this.toggler();
  }
  Accept(id:string){

  }
  Reject(id:string){
    
  }
}
