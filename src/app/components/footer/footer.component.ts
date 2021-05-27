import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isChat: boolean = false;

  hide() {
    const state = localStorage.getItem("isChat")
    this.isChat = state === 'true' ? true : false;
    console.log(this.isChat)
  }

  constructor(private route: Router) {
    route.events.subscribe(() => {
      setTimeout(this.hide, 1000)
    })
  }

  ngOnInit(): void {
  }

}
