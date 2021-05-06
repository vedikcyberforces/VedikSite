import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  onJoin(data:Object){
    this.API.postForm("/auth/join", data)
  }
  constructor(private API: ApiService) { }

  ngOnInit(): void {
  }

}
