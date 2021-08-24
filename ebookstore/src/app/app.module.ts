import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { EbookfrontComponent } from './ebookfront/ebookfront.component';
import { EbookdisplayComponent } from './ebookdisplay/ebookdisplay.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:AppComponent},
  {path:'books',component:EbookfrontComponent},
  {path:'cart',component:EbookdisplayComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EbookfrontComponent,
    EbookdisplayComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})

export class AppModule { }
