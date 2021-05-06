import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private api: ApiService, private http: HttpClient) { }

  async getNewses() {
    return await this.http.get(this.api.getBaseUrl("/api/news")).toPromise();
  }
}