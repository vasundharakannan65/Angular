import { Component } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './models/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebookstore';

  constructor(private _bookservice : BookService) { }

  books : Book[] = [];

  index  :number = 0;

  ngOnInit()
  {
    this.books = this._bookservice.getBooks();
  }

}
