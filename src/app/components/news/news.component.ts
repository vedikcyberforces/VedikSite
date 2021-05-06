import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newses: any
  currentSlide = 0;
  numberofSlides:any
  loadNextSlide(){
    if(this.currentSlide < this.numberofSlides-1){
      this.currentSlide++;
    }
    else{
      this.currentSlide = 0;
    }
  }
  loadPreviousSlide(){
    if(this.currentSlide > 0){
      this.currentSlide--;
    }
    else{
      this.currentSlide = this.numberofSlides -1;
    }
  }
  isVisible(index:number){
    if(this.currentSlide == index){
      return true;
    }
    return false;
  }
  constructor(private API:ApiService) { }
  ngOnInit(): void {
    this.API.getData("/api/news", "").then((value)=>this.newses = value)
  }
}
