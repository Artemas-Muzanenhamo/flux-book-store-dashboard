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

  private getAllBooks() {
    return this.bookService.getBooks()
      .subscribe(bookData => {
        console.log(bookData);
        this.books = bookData;
      });
  }

  ngOnInit(): void {
    this.bookService.getBooks()
      .subscribe(bookData => {
        console.log(bookData);
        this.books = bookData;
      });
  }
}
