import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookdisplayComponent } from './bookdisplay/bookdisplay.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksService } from './books.service';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    BookdisplayComponent,
    BookeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
