import { Component } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable }  from '@angular/core';
import { IData } from './data';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class DataService {
  private url: string = "https://jsonplaceholder.typicode.com/todos/";
  public data = [];

  constructor(private http: HttpClient){
    // this.getContext();
    // this.getData();

  }

getData(): Observable<IData[]>{
     console.log("hello");
      return this.http.get<IData[]>(this.url) 
     .pipe(tap(data => alert(JSON.stringify(data))));
} 

//  getContext(){
//   this.getData().subscribe(data => {
//      this.data=data;
//      console.log("Loop");
//      return (this.data);
//      }
//  )}
}
