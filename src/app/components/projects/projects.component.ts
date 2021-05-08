import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isALL = true;
  isWeb = false;
  isDesktop = false;
  isMobile = false;
  constructor() { }

  ngOnInit(): void {
  }
  isActive(tab : string){
    if(tab == 'ALL') {
      this.isALL = true;
      this.isDesktop = false;
      this.isMobile = false;
      this.isWeb = false;
    }
    if(tab == 'Web') {
      this.isALL = false;
      this.isDesktop = false;
      this.isMobile = false;
      this.isWeb = true;
    }
    if(tab == 'Desktop') {
      this.isALL = false;
      this.isDesktop = true;
      this.isMobile = false;
      this.isWeb = false;
    }
    if(tab == 'Mobile') {
      this.isALL = false;
      this.isDesktop = false;
      this.isMobile = true;
      this.isWeb = false;
    }
  }

}
