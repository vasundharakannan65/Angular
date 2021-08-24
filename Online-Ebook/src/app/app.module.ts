import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { DisplaybookComponent } from './displaybook/displaybook.component';
import { IndividualbookComponent } from './individualbook/individualbook.component';
import { RouterModule, Routes } from '@angular/router';
import { EditbookComponent } from './editbook/editbook.component';

const appRouting : Routes = [
  {path:'',component:HomeComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'displaybook',component:DisplaybookComponent},
  {path:'individualbook/:i',component:IndividualbookComponent},
  {path:'displaybook',
  children:[
    {path:'editbook/:i',component:EditbookComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    HomeComponent,
    DisplaybookComponent,
    IndividualbookComponent,
    EditbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
