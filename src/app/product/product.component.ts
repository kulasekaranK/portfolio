import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products = [
    {
      id: 1,
      title: 'Code Hearted T-shirt',
      url: 'https://made4dev.com/cdn/shop/products/mockup-7a5b3791_360x.jpg?v=1607644429',
      price: 350,
      badge:"For Developer"
    },
    {
      id: 2,
      title: 'Binary Joke T-shirt',
      url: 'https://made4dev.com/cdn/shop/products/mockup-a3b1a540_360x.jpg?v=1560988336',
      price: 300,
       badge:"For Developer"
    },
    {
      id: 3,
      title: "Trust Me I'm a Developer T-shirt",
      url: 'https://made4dev.com/cdn/shop/products/mockup-50b89fb9_360x.jpg?v=1607644336',
      price: 350,
       badge:"For Developer"
    },
    {
      id: 4,
      title: 'Eat Sleep Code Loop T-shirt',
      url: 'https://made4dev.com/cdn/shop/products/mockup-ec37aa2a_360x.jpg?v=1563803634',
      price: 400,
       badge:"For Developer"
    },
  ];
}
