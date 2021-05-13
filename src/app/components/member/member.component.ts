import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  member_data:any;

  constructor(private API: ApiService) { }

  async ngOnInit() {
    this.API.getData('/api/member').then((val)=>{
      // console.log(val)
      this.member_data = val;
    })
  }

}
