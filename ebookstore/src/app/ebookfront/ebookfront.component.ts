
import { Component, OnInit} from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-ebookfront',
  templateUrl: './ebookfront.component.html',
  styleUrls: ['./ebookfront.component.css']
})

export class EbookfrontComponent implements OnInit {

  constructor(private _bookservice : BookService) { }

  books : Book[] = [];

  index  :number = 0;

  url !: any;
  msg !:string;

  ngOnInit(){
    this.books = this._bookservice.getBooks();
  }

  onBookCreated(Isbn:number,Title:string,Desc:string,Author:string,Price:number,Image:any)
  {
    this._bookservice.createBooks(Isbn,Title,Desc,Author,Price,Image,this.url);
    alert("Successfully added!");
    let ref = document.getElementById('cancel');
    ref?.click();

  }

  onSelectFile(event: any) {
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var fileType = event.target.files[0].type;

    if (fileType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    var path = new FileReader();
    path.readAsDataURL(event.target.files[0]);

    path.onload = (_event) => {
      this.msg = "";
      this.url = path.result;
    }
  }

}
