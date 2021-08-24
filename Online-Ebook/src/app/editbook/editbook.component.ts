import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  constructor(private _bookservice : BookService,
    private route : ActivatedRoute) { }

  books : Book[] = [];

  index  : number = 0;

  id : number = 0;

  ngOnInit()
  {
    this.books = this._bookservice.getBooks();
    this.id = +this.route.snapshot.params['i'];
  }

  onBookUpdate(bookDesc:string,bookPrice:number)
  {
    this._bookservice.updateBooks(bookDesc,bookPrice,this.index);
    alert("Successfully updated!");
    let ref = document.getElementById('cancels');
    ref?.click();
  }
}
