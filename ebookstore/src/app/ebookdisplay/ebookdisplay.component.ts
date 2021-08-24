import { Component, OnInit} from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-ebookdisplay',
  templateUrl: './ebookdisplay.component.html',
  styleUrls: ['./ebookdisplay.component.css']
})
export class EbookdisplayComponent implements OnInit {

  constructor(private _bookservice : BookService) { }

  books : Book[] = [];

  index  :number = 0;

  // isCollapsed : boolean = true ;

  selectedBook: any = null;
  selectedIndex : any = null;
  editedBook:any = null;

  collectdata(id:number)
  {
    //this.isCollapsed = !this.isCollapsed;
    this.selectedBook = this.books[id];
  }

  ngOnInit(){
    this.books = this._bookservice.getBooks();
  }

  // onBookEdited(index:number)
  // {
  //   this.index = index;
  // }

  onBookEdited(index:number)
  {
    this.index = index;
    //return this.editedBook = books;

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

}
