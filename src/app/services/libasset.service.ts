import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';








@Injectable({
  providedIn: 'root'
})
export class LibAssetService {





  constructor(private http: HttpClient) { }


  getMaterials() {

    return this.http.get<any>('/api/v1/materials');


  }

  getLocations() {

    return this.http.get<any>('/api/v1/locations');


  }


  // console.log("SUCCESS");


}
