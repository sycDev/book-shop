import { Injectable } from '@angular/core';
import { Book } from '../interface/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Book> = [];

  constructor() { }

  get() {
    return this.cart;
  }
  
  add(book: Book) {
    this.cart.push(book);
  }

  remove (book: Book) {
    this.cart = this.cart.filter(b => b != book);
  }
}
