import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../products/product';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItems = signal<CartItem[]>([]);

  readonly totalItems = computed(
    () => this.cartItems()
      .reduce((total, item) => total + item.quantity, 0))

  addToCart(product: Product) {
    this.cartItems.update(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return  prevItems.map(item => item.product.id === product.id ? {...item, quantity: item.quantity + 1} : item);
      }
      return [...prevItems, {quantity: 1, product}];
    })
  }
}
