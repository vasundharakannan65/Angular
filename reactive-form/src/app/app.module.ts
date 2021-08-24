import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpformComponent } from './empform/empform.component';
import { EmpdisplayComponent } from './empdisplay/empdisplay.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule,} from '@angular/forms';

const appRouting : Routes = [
  {path:'',component:HomeComponent},
  {path:'empform',component:EmpformComponent},
  {path:'empdisplay',component:EmpdisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpformComponent,
    EmpdisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
