import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-empdisplay',
  templateUrl: './empdisplay.component.html',
  styleUrls: ['./empdisplay.component.css']
})
export class EmpdisplayComponent implements OnInit {

  constructor(private _employeeservice : EmployeeService) { }

  employees: Employee[] = [];

  ngOnInit(){
    this.employees = this._employeeservice.getEmployee();
  }

}
