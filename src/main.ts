
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

import { ProductComponent } from './app/product/product.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { PortfolioComponent } from './app/portfolio/portfolio.component';
import { ProductViewComponent } from './app/product-view/product-view.component';
import { ProductImgViewComponent } from './app/product-img-view/product-img-view.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([

      { path:"product", component:ProductComponent},
      { path:"product-view/:id", component:ProductViewComponent},
      { path:"product-img-view/:id", component:ProductImgViewComponent},
      {path:"", component:AboutComponent},
      {path:"portfolio", component:PortfolioComponent},
      {path:"contact", component:ContactComponent}
    ])
  ]
})
  .catch(err => console.error(err));
