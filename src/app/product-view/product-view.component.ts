import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductDescriptionComponent } from '../product-description/product-description.component';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule,ProductDescriptionComponent, RouterLink],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
})
export class ProductViewComponent {
  id: number = 0;
  product: any;

  products = [
    {
      id: 1,
      title: 'Code Hearted T-shirt',
      url: 'https://made4dev.com/cdn/shop/products/mockup-7a5b3791_360x.jpg?v=1607644429',
      price: 350,
      badge:"Worldwide Shipping Available",
      InStock:true,
      description:
        'Are you passionate about coding? Is coding part of your lifestyle? This tee is designed for you. Simple yet stylish this tee is perfect for coders who deeply care about what they write on a daily basis. It’s a great tee to wear at work, at a dev meetup or a tech conference. Made from 100% premium soft cotton, this tee will not only provide you with the comfort you need while coding but it can also motivate you and promote productivity.',
    
    },
    {
      id: 2,
      title: 'Binary Joke T-shirt',
      url: 'https://made4dev.com/cdn/shop/products/mockup-a3b1a540_360x.jpg?v=1560988336',
      price: 300,
      badge:"All India Shipping Available",
      InStock:true,
      description:"“There are only 10 types of people in the world: those who understand binary, and those who don't.” If you’re a developer we bet you love this binary joke. Made from 100% premium soft cotton, this tee features a bear silhouette with the word “metal” to present “Bare Metal”. It’s a wardrobe must for anyone who understands binary."
    },
    {
      id: 3,
      title: "Trust Me I'm a Developer T-shirt",
      url: 'https://made4dev.com/cdn/shop/products/mockup-50b89fb9_360x.jpg?v=1607644336',
      price: 350,
      badge:"Worldwide Shipping Available",
      InStock:false,
      description:"Are you a trustworthy developer? This humorous tee will be a great addition to your off-duty wardrobe. Made from 100% ring-spun cotton, it’s incredibly soft and comfy. It makes a great birthday gift for a developer too."
    },
    {
      id: 4,
      title: 'Eat Sleep Code Loop T-shirt',
      url: 'https://made4dev.com/cdn/shop/products/mockup-ec37aa2a_360x.jpg?v=1563803634',
      price: 400,
      badge:"All India Shipping Available",
      InStock:false,
      description:"Eat Sleep Code Loop. Do you feel your life rolls like that sometimes as a programmer? Made from 100% premium cotton this light-weight tee is soft and stylish, it features a bold 'Eat Sleep Code Loop”' slogan design and a large coding block print. This tee is perfect for work or hackathons."
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.product = this.products.find((p) => p.id === this.id);
    });
  }
}
