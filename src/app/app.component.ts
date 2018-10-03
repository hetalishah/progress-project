import { Component } from '@angular/core';
import { DataService } from './data.service';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    template: `
        <kendo-grid [data]="gridData" [height]="600">
            <kendo-grid-column field="userID" title="UserID" width="50">
            </kendo-grid-column>
            <kendo-grid-column field="ID" title="ID" width="50">
            </kendo-grid-column>
            <kendo-grid-column field="title" title="Title"width="100">
            </kendo-grid-column>
            <kendo-grid-column field="completed" title="Completed" width="250">
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: any[];
    constructor(private dataService: DataService) { }
     
    ngOnInit() {
         this.dataService.getData() 
       }
}
