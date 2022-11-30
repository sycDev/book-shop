import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C. Martin',
        image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        amount: 35
      },
      {
        name: 'The Pragmatic Programmer',
        author: 'David Thomas',
        image: 'https://m.media-amazon.com/images/I/51IA4hT6jrL._SX380_BO1,204,203,200_.jpg',
        amount: 40
      },
      {
        name: 'The Art of Computer Programming',
        author: 'Donald E. Knuth',
        image: 'https://m.media-amazon.com/images/I/41msKv2oN9L._SY429_BO1,204,203,200_.jpg',
        amount: 275
      },
      {
        name: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen',
        image: 'https://m.media-amazon.com/images/I/513P8XoCAEL._SX376_BO1,204,203,200_.jpg',
        amount: 33
      }
    ];
  }
}
