import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:3000"

  getBaseUrl(route:String){ 
    if(route){
      return this.baseUrl + route;
    }
    return this.baseUrl
  }

  constructor() { }
}
