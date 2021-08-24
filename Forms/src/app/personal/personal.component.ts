import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent implements OnInit {

  personalForm !: FormGroup;

  countries:string[];
  states:string[];

  constructor(private _formbuilder : FormBuilder,
    private _formservice : FormService,
    private _routes : Router) {
    this.countries = this._formservice.getCountries();
    this.states = this._formservice.getStates();
  }

  ngOnInit()
  {

    this.personalForm = this._formbuilder.group({
      'fname' : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      'lname' : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      'email' : ['',Validators.email],
      'phonenum' : ['',[Validators.pattern("[0-9]{10}")]],
      'address' : ['',Validators.required],
      'country' : ['',Validators.required],
      'state' : ['',Validators.required]
    });

  }

  updateState(country:any)
  {
    this.states = this._formservice.cascadingState(country);
  }

  onSubmit(form:any)
  {
    this._formservice.addPersonal(form.value);
  }

  onNext()
  {
    this._routes.navigateByUrl('/professional');
  }
}
