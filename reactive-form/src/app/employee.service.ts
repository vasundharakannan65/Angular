import { Injectable } from '@angular/core';
import { Employee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor() { }

  employees : Employee[] = [
  {
    fname:"Ross",lname:"Geller",email:"r@100.com",phonenum:1234567899,address:"abc st, abc",country:"America",state:"New York"
  },
  {
    fname:"Monica",lname:"Chandler",email:"m@c.com",phonenum:3434343434,address:"No. 9, xyz",country:"France",state:"Berry"
  },
  {
    fname:"Rachel",lname:"Green",email:"r@green.com",phonenum:6767676767,address:"#67 abc",country:"America",state:"Texas"
  }];

  addEmployee(form:any)
  {
    this.employees.push(form);
    localStorage.setItem('employee',JSON.stringify(form));
  }

  getEmployee()
  {
    return this.employees;
  }

  countries : string[] = ['India','America','France'];

  states : string[] = [];

  indiaStates:string[] = ['Tamil Nadu','Kerala','New Delhi'];
  americaStates:string[] = ['California','Texas','New York'];
  franceStates:string[] = ['Corse','Centre','Berry'];

  getCountries()
  {
    return this.countries;
  }

  getStates()
  {
    return this.states;
  }

  cascadingState(country:any)
  {
    switch(country.target.value)
    {
      case 'India':
        this.states = this.indiaStates;
        break;
      case 'America':
        this.states = this.americaStates;
        break;
      case 'France':
        this.states = this.franceStates;
        break;
      default:
        this.states = [];
        break;
    }
    return this.states;
  }


}
