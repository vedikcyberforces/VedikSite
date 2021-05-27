import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isChat : boolean = false;

  constructor(private route : Router) {
    route.events.subscribe(()=>{
      const state = localStorage.getItem("isChat")
      this.isChat = state === 'true' ? true : false;
    })
   }

  ngOnInit(): void {
  }

}
