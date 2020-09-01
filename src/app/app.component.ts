import {Component, OnInit} from '@angular/core';
import {BookStoreService} from './book-store.service';
import {Book} from './book';
import {SseService} from './sse.service';
import {Author} from './author';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flux-book-store-dashboard';
  book: Book;
  booksSet: Set<Book> = new Set<Book>();

  constructor(
    private bookService: BookStoreService,
    private sseService: SseService
  ) {
    this.bookService = bookService;
  }

  private getAllBooks() {
    return this.bookService.getBooks()
      .subscribe(bookData => {
        console.log(bookData);
      });
  }

  ngOnInit(): void {
    this.sseService
      .getServerSentEvent('http://localhost:8080/books/reactive')
      .subscribe(data => {
        console.log(data);
        this.book = JSON.parse(data.data);
        this.booksSet.add(this.book);
      });
  }
}
