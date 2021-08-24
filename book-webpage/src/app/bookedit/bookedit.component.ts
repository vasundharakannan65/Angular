import { Component,Input,OnInit} from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../models/Book';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrls: ['./bookedit.component.css']
})
export class BookeditComponent implements OnInit {

  constructor(private _bookservice : BooksService) {}

  ngOnInit() {}

  @Input() specificbook : Book[] = [];


}
