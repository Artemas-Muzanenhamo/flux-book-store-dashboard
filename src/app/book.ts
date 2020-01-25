import {Author} from './author';

export class Book {
  author: Author;
  title: string;

  constructor(author: Author, title: string) {
    this.author = author;
    this.title = title;
  }
}
