import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImgViewComponent } from './product-img-view.component';

describe('ProductImgViewComponent', () => {
  let component: ProductImgViewComponent;
  let fixture: ComponentFixture<ProductImgViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImgViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
