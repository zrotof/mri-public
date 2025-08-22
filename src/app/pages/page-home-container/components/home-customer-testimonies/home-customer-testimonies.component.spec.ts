import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustomerTestimoniesComponent } from './home-customer-testimonies.component';

describe('HomeCustomerTestimoniesComponent', () => {
  let component: HomeCustomerTestimoniesComponent;
  let fixture: ComponentFixture<HomeCustomerTestimoniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCustomerTestimoniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCustomerTestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
