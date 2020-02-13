import {Injectable} from '@angular/core';
import {Book} from './book';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class BookStoreService {

  constructor(private httpClient: HttpClient) { }

  private url = 'http://localhost:8080/books';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.url, this.httpOptions);
  }
}
