import { Injectable } from '@angular/core';
import { Book } from './models/Book';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  bookList: Book[] = [];

  constructor() { }

  createBooks(Isbn:number,Title:string,Desc:string,Author:string,Price:number,Visible:boolean)
  {

    this.bookList.push({
      bookIsbn : Isbn,
      bookTitle : Title,
      bookDesc : Desc,
      bookAuthor : Author,
      bookPrice : Price,
      bookVisible : Visible
    });

    localStorage.setItem('book',JSON.stringify(this.bookList));
  }

  getBooks()
  {
    return this.bookList;
  }

  showDetails(index:number,bookList:Book)
  {
    return this.bookList[index];
  }

  
}
