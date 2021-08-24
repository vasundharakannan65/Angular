import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';


@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  professionalForm !: FormGroup;
  professionalDetailForm !: FormArray;


  constructor(private _formbuilder : FormBuilder,
    private _routes : Router,private _formservice : FormService) {
      this.professionalForm = this._formbuilder.group({
        professionalDetailForm : this._formbuilder.array([this.createCompany()])
      });

      this.professionalDetailForm = this.professionalForm.get('pofessionalDetailForm') as FormArray;

  }

  ngOnInit(){}

  get professionalFormControl() {
    return this.professionalForm.get(`professionalDetailForm`) as FormArray;
  }

  onSubmit(form:any)
  {
    this._formservice.addProfessional(form.value);
  }

  onNext()
  {
    // console.log(this.professionalForm.value);
    this._routes.navigateByUrl('/attachments');
  }

  createCompany() : FormGroup
  {
    return this._formbuilder.group({
      'company' : ['',Validators.required],
      'designation' : ['',Validators.required],
      'startdate' : ['',Validators.required],
      'lastdate' : ['',Validators.required],
      'skills' : ['',Validators.required]
    })
  }

  addCompany() : void {
    this.professionalDetailForm = this.professionalForm.get('professionalDetailForm') as FormArray;
    this.professionalDetailForm.push(this.createCompany());
  }

}
