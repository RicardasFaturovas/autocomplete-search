import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {SearchComponent} from "./components/search.component/search.component";

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ AppComponent, SearchComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
