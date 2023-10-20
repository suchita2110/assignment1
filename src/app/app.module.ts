import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxCompComponent } from './box-comp/box-comp.component';
import { CircleCompComponent } from './circle-comp/circle-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxCompComponent,
    CircleCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
