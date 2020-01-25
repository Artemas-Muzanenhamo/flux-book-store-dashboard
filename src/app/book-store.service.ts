import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';
import {Author} from './author';

@Injectable()
export class BookStoreService {

  private http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  author = new Author('artemas', 'muzanenhamo');
  book = new Book(this.author, 'some title');

  books = [this.book, this.book, this.book];

  public getBooks(): Book[] {
    return this.books;
  }
}
