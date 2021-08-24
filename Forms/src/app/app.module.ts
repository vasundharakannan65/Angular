import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

const appRouting : Routes = [
  {path:'',component:HomeComponent},
 {path:'register',component:RegisterComponent}
]

// const appRouting : Routes = [
//   {path:'',component:HomeComponent},
//   {path:'register/',component:RegisterComponent,
//   children: [
//     {path:'personal',component:PersonalComponent},
//     {path:'professional',component:ProfessionalComponent},
//     {path:'attachments',component:AttachmentsComponent}
//   ]}]



const registerRouting : Routes = [
  {path:'personal',component:PersonalComponent},
  {path:'professional',component:ProfessionalComponent},
  {path:'attachments',component:AttachmentsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ProfessionalComponent,
    AttachmentsComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouting),
    RouterModule.forRoot(registerRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
