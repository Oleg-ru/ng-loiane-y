import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIcon],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
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
    },
  ]);
}
