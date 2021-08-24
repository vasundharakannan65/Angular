import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-individualbook',
  templateUrl: './individualbook.component.html',
  styleUrls: ['./individualbook.component.css']
})
export class IndividualbookComponent implements OnInit {

  constructor(private _bookservice : BookService,
    private route : ActivatedRoute) { }

  books : Book[] = [];

  id !: number;

  ngOnInit()
  {
    this.books = this._bookservice.getBooks();
    this.id = +this.route.snapshot.params['i'];
  }

}
