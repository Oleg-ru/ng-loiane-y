import { Component, computed, inject, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../cart/cart-service';

@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCard,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  private readonly cartService = inject(CartService);

  protected readonly searchTerm = signal('');

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      description: '6.7-дюймовый дисплей, титановый корпус, A17 Pro чип',
      price: 1299,
      originalPrice: 1499,
    },
    {
      id: 2,
      name: 'MacBook Air 15"',
      description: '15.3-дюймовый Liquid Retina, M2 чип, 8GB RAM, 256GB SSD',
      price: 1199,
      originalPrice: 1299,
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      description: '6.8-дюймовый Dynamic AMOLED, Snapdragon 8 Gen 3, S Pen',
      price: 1099,
    },
    {
      id: 4,
      name: 'Sony WH-1000XM5',
      description: 'Наушники с шумоподавлением, до 30 часов работы, LDAC',
      price: 349,
      originalPrice: 399,
    },
    {
      id: 5,
      name: 'Apple Watch Ultra 2',
      description: '49-мм корпус, всегда включенный дисплей, GPS + Cellular',
      price: 799,
    },
    {
      id: 6,
      name: 'iPad Pro 12.9" M2',
      description: '12.9-дюймовый Liquid Retina XDR, M2 чип, поддержка Apple Pencil',
      price: 1099,
      originalPrice: 1199,
    },
  ]);

  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.products();

    return this.products().filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term),
    );
  });

  protected clearSearch() {
    this.searchTerm.set('');
  }

  protected onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
