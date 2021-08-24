import { Injectable } from '@angular/core';
import { Personal } from './models/Personal';
import { Professional } from './models/Professional';
import { Attachment } from './models/Attachment';



@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor() {
  }

  Data : any[] = [];

  PersonalData : Personal[] = [];
  ProfessionalData : Professional[] = [];
  AttachmentData : Attachment[] = [];

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

  addPersonal(data:Personal)
  {
    this.PersonalData.push(data);
  }

  addProfessional(data:Professional)
  {
    this.ProfessionalData.push(data);
  }

  addAttachment(data:Attachment)
  {
    this.AttachmentData.push(data);
  }

  // storeDetails()
  // {

  //   localStorage.setItem('key',JSON.stringify(this.Data));
  // }

  getData()
  {
    this.Data.push(this.PersonalData);
    localStorage.setItem('key',JSON.stringify(this.Data));
    return this.Data;
  }


}
