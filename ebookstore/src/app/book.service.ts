import { Injectable, NgModule } from '@angular/core';
import { Book } from './models/Book';


@Injectable({
  providedIn: 'root'
})

export class BookService {

  bookList: Book[] = [
  {
    bookIsbn:1,bookTitle:"Harry Potter",bookDesc:"Fantasy book",bookAuthor:"J.K.Rowling",bookPrice:100,
    bookImage:"./../../assets/images/book1.jpg"
  },
  {
  bookIsbn:2,bookTitle:"Game of Thrones",bookDesc:"Fantasy book",bookAuthor:"Martin",bookPrice:200,
  bookImage:"./../../assets/images/book2.jpg"
  },
  {
  bookIsbn:3,bookTitle:"Lord of the Rings",bookDesc:"Fantasy book",bookAuthor:"Tolkien",bookPrice:250,
  bookImage:"./../../assets/images/book3.jpg"
  }
  ];

  constructor() { }

  createBooks(Isbn:number,Title:string,Desc:string,Author:string,Price:number,Image:any,url:any)
  {

    this.bookList.push({
      bookIsbn : Isbn,
      bookTitle : Title,
      bookDesc : Desc,
      bookAuthor : Author,
      bookPrice : Price,
      bookImage  : url
    });

    console.log(url);
    localStorage.setItem('book',JSON.stringify(this.bookList));
  }


  getBooks()
  {
    return this.bookList;
  }

  updateBooks(Desc:string,Price:number,index:number)
  {
    this.bookList[index].bookDesc = Desc;
    this.bookList[index].bookPrice = Price;
  }


}
