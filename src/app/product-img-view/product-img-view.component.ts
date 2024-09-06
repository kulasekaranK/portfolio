import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-img-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-img-view.component.html',
  styleUrl: './product-img-view.component.css',
})
export class ProductImgViewComponent {
  id:number=0;
  img:any;
  products = [
    {
      id: 1,

      url: 'https://made4dev.com/cdn/shop/products/mockup-7a5b3791_360x.jpg?v=1607644429',
    },
    {
      id: 2,

      url: 'https://made4dev.com/cdn/shop/products/mockup-a3b1a540_360x.jpg?v=1560988336',
    },
    {
      id: 3,

      url: 'https://made4dev.com/cdn/shop/products/mockup-50b89fb9_360x.jpg?v=1607644336',
    },
    {
      id: 4,

      url: 'https://made4dev.com/cdn/shop/products/mockup-ec37aa2a_360x.jpg?v=1563803634',
    },
  ];

  constructor(private route:ActivatedRoute){
    this.route.params.subscribe((params)=>{
      this.id = +params['id'];
      this.img = this.products.find(p=> p.id === this.id);
    })
  }
}
