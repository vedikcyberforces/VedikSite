import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000"
  //baseUrl = "https://outstanding-delightful-touch.glitch.me"

  getBaseUrl(route: String) {
    if (route) {
      return this.baseUrl + route;
    }
    return this.baseUrl
  }

  async postForm(route: String, data: Object) {
    return await this.http.post(this.getBaseUrl(route), data).toPromise();
  }
  async getData(route: String, token:Object) {
    return await this.http.get(this.getBaseUrl(route)).toPromise();
  }

}
