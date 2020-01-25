import {Component, OnInit} from '@angular/core';
import {BookStoreService} from './book-store.service';
import {Book} from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flux-book-store-dashboard';
  books: Book[];

  constructor(private bookService: BookStoreService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {
    this.bookService.getBooks()
      .subscribe(e => {
        console.log(e);
        this.books = e;
      });
  }
}
