import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joininfomodal',
  templateUrl: './joininfomodal.component.html',
  styleUrls: ['./joininfomodal.component.css']
})
export class JoininfomodalComponent implements OnInit {

  constructor() { }
  isInfoActive:any
  ngOnInit(): void {
  }
  toggler(){
    this.isInfoActive = !this.isInfoActive;
  }


}
