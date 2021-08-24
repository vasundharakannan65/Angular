import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent implements OnInit {

  employeeForm !: FormGroup;

  countries:string[];
  states:string[];

  constructor(private _formbuilder : FormBuilder,
    private _employeeservice : EmployeeService) {
      this.countries = this._employeeservice.getCountries();
      this.states = this._employeeservice.getStates();
    }

  ngOnInit()
  {
    this.employeeForm = this._formbuilder.group({
      'fname' : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      'lname' : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      'email' : ['',Validators.email],
      'phonenum' : ['',[Validators.pattern("[0-9]{10}")]],
      'address' : ['',Validators.required],
      'country' : ['',Validators.required],
      'state' : ['',Validators.required]
    });
    // console.log(this.employeeForm);

  }


  updateState(country:any)
  {
    this.states = this._employeeservice.cascadingState(country);
  }

  onSubmit(form:any)
  {
    this._employeeservice.addEmployee(form.value);
    alert("Successfully submitted!");
    // location.pathname = '/empdisplay';
  }

  
}
