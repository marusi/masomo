import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Data {
  title: string;
  author: string;
  publication: string;
 }


@Injectable({
  providedIn: 'root'
})
export class StudentService {




  constructor(private http: HttpClient) { }








}
