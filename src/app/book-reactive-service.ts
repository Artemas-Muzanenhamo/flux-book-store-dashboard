import {Injectable} from '@angular/core';
import {Book} from './book';
import {Observable} from 'rxjs';
import {Author} from './author';

@Injectable()
export class BookReactiveService {

  books: Book[] = [];
  url = 'http://localhost:8080/books/reactive';

  getBooksStream(): Observable<Array<Book>> {
    this.books = [];
    return Observable.create((observer) => {
      const url = this.url;
      const eventSource = new EventSource(url);
      eventSource.onmessage = (event) => {
        console.log('Received event: ', event);
        const json = JSON.parse(event.data);
        // this.books.push(new Book(json['id'], json['book'], json['content']));
        this.books.push(
          new Book(
            new Author(json.author.name, json.author.surname),
            json.title
          ));
        observer.next(this.books);
      };
      eventSource.onerror = (error) => {
        // readyState === 0 (closed) means the remote source closed the connection,
        // so we can safely treat it as a normal situation. Another way of detecting the end of the stream
        // is to insert a special element in the stream of events, which the client can identify as the last one.
        if (eventSource.readyState === 0) {
          console.log('The stream has been closed by the server.');
          eventSource.close();
          observer.complete();
        } else {
          observer.error('EventSource error: ' + error);
        }
      };
    });
  }

}
