import { Component,OnInit} from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../models/Book';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bookdisplay',
  templateUrl: './bookdisplay.component.html',
  styleUrls: ['./bookdisplay.component.css']
})
export class BookdisplayComponent implements OnInit {

  public bookList : Book[] = [];

  public specificBook : Book[] = [];

  public specificToggle : boolean = false;;

  constructor(private _bookservice : BooksService) {
  }

  ngOnInit()
  {
    this.bookList = this._bookservice.getBooks();
  }

  showDetails(index:number,bookList:Book)
  {
    this.specificBook[index] = this._bookservice.showDetails(index,bookList);
  }

  open(content:any)
  {
    // console.log();
    
  }
}
