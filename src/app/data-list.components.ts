import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    template: `
    <ul *ngFor="let result of data">
    <li>{{result.title}}</li>
    </ul>
    `
})

export class DataListComponent implements OnInit {
    
      public data = [];
      constructor(private dataService: DataService) { }
    
      ngOnInit() {
        this.dataService.getData()
          .subscribe(data => this.data = data);

          console.log(this.data);
          }
        }
