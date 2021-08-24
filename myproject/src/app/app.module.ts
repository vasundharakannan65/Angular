import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewuserComponent } from './newuser/newuser.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    NewuserComponent,
    UserdisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
