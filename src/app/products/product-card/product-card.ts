import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly addButtonLabel = input('Add to Cart');

  readonly addToCart = output<Product>();
  protected onAddToCart() {
    this.addToCart.emit(this.product());
  }
}
