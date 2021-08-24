import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.css']
})
export class DisplaybookComponent implements OnInit {

  constructor(private _bookservice : BookService) { }

  books : Book[] = [];

  index  :number = 0;

  selectedBook: any = null;
  selectedIndex : any = null;
  editedBook:any = null;

  collectdata(id:number)
  {
    this.selectedBook = this.books[id];
  }

  ngOnInit()
  {
    this.books = this._bookservice.getBooks();
  }

  onBookEdit(index:number)
  {
    this.index = index;
  }

  onBookUpdate(bookDesc:string,bookPrice:number)
  {
    this._bookservice.updateBooks(bookDesc,bookPrice,this.index);
    alert("Successfully updated!");
    let ref = document.getElementById('cancels');
    ref?.click();
  }

  getId(isbn:number)
  {
    let i = this.books.findIndex(x => x.bookIsbn == isbn);
    return i;
  }

  onBookDelete(i:number)
  {
    this._bookservice.deleteBook(i);
  }

}
