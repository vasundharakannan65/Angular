import { Component, Input, OnInit } from '@angular/core';
import { Student } from './../models/Student';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})

export class NewuserComponent implements OnInit {

  //@Input() id:number;

  student: Student[] = [];

  constructor() { }

  ngOnInit(): void {
    this.student = [];
  }

  @Input() id!: number;

  onUserCreated(username:string,userstatus:string)
  {
    this.student.push({
     name : username,
     status : userstatus
    });


    localStorage.setItem('student',JSON.stringify(this.student));
    //console.log(this.student)
  }

  GetData(student:{id:number,status:string})
  {
    this.student[student.id].status = student.status;
  }


}

