import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  zoom(sender:any){
    console.log(sender)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
