import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';








@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  private readonly articleEndpoint = '/api/articles';


  constructor(  private http: HttpClient) { }


  getNewsEvents() {
    return this.http.get<any>('/api/newsandevents');
  }

  getLocations() {
    return this.http.get<any>('/api/locations');
  }

  create(article) {
    return this.http.post(this.articleEndpoint, article);

  }

  getArticle(id) {
    return this.http.get<any>(this.articleEndpoint + '/' + id);
  }


  getAllArticles(filter) {
    console.log(`${this.articleEndpoint}?${this.toQueryString(filter)}`);
    return this.http.get<any>(`${this.articleEndpoint}?${this.toQueryString(filter)}`);
  }

  toQueryString(obj) {
    var parts = [];
    for (var property in obj) {
      var value = obj[property];
      if (value != null && value != undefined)
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }
    return parts.join('&');
  }
  
}
