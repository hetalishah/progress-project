import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { DataListComponent } from './data-list.components';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, GridModule, HttpClientModule ],
  declarations: [ AppComponent , DataListComponent],
  bootstrap: [ AppComponent ],
  providers: [DataService]
})

export class AppModule { }