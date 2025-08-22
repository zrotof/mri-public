import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSupplierCarouselComponent } from './home-supplier-carousel.component';

describe('HomeSupplierCarouselComponent', () => {
  let component: HomeSupplierCarouselComponent;
  let fixture: ComponentFixture<HomeSupplierCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSupplierCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSupplierCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
