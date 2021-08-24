import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bookList = [];

  constructor(private _bookservice : BooksService ) {
  }

  ngOnInit(): void {
  }

  onBookCreated(Isbn:number,Title:string,Desc:string,Author:string,Price:number,Visible:boolean)
  {
    this._bookservice.createBooks(Isbn,Title,Desc,Author,Price,Visible);
  }
}
