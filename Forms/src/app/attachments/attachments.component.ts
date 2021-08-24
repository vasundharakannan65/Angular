import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent implements OnInit {

  attachmentForm : FormGroup;

  constructor(private _formbuilder : FormBuilder,
    private _formservice : FormService) {
      this.attachmentForm = this._formbuilder.group({
        'resume' : ['',Validators.required]
      })
     }

  ngOnInit(){

  }

  onSubmit(form:any)
  {
    this._formservice.addAttachment(form.value);
    this.onNext();
    // alert("Successfully submitted!");
    // console.log(this._formservice.getData());
  }

  onNext()
  {
    alert("Successfully submitted!");
    console.log(this._formservice.getData());
  }
}
