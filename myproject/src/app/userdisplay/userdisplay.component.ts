import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../models/Student';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})

export class UserdisplayComponent implements OnInit {

  @Input() student:Student[] = [];

  @Output() onStatusEvent = new EventEmitter<{id:number;status:string}>();


  constructor() { }

  ngOnInit(){
    //console.log(this.student);
  }

  changeActive(id:number,status:string)
  {
    this.onStatusEvent.emit({id,status});
  }

  changeInactive(id:number,status:string)
  {
    this.onStatusEvent.emit({id,status});
  }
}

