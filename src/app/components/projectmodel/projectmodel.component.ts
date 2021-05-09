import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectmodel',
  templateUrl: './projectmodel.component.html',
  styleUrls: ['./projectmodel.component.css']
})
export class ProjectmodelComponent implements OnInit {

  isModalActive = false;
  currentSlide = 0;

  data = [
    "https://img.freepik.com/free-vector/flame-abstract-logo_95982-235.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-vector/mic-leaf-logo_83874-139.jpg?size=338&ext=jpg",
    "https://img.freepik.com/free-vector/latter-e-fire-color_116762-8.jpg?size=338&ext=jpg",
    "https://img.freepik.com/free-vector/fire-shield-logo_23758-270.jpg?size=338&ext=jpg",
    "https://img.freepik.com/free-vector/fire-water-logo-design_149374-138.jpg?size=338&ext=jpg",
    "https://img.freepik.com/free-vector/flame-abstract-logo_95982-235.jpg?size=626&ext=jpg"
  ];
  numberofSlides = this.data.length;

  constructor() { }

  ngOnInit(): void {
  }


  ProjectDescription(){
    this.isModalActive = true;
  }

  //toggles for the Project Description modal
  toggler() {
    this.isModalActive = !this.isModalActive;
  }


  // Load Next Carousel function
  loadNextSlide(){
    console.log(this.currentSlide)
    if(this.currentSlide < this.numberofSlides-1){
      this.currentSlide++;
    }
    else{
      this.currentSlide = 0;
    }
  }


  // Load Previous Carousel function
  loadPreviousSlide(){
    console.log(this.currentSlide)
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
}
