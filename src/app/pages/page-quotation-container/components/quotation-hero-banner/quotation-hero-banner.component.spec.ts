import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationHeroBannerComponent } from './quotation-hero-banner.component';

describe('QuotationHeroBannerComponent', () => {
  let component: QuotationHeroBannerComponent;
  let fixture: ComponentFixture<QuotationHeroBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotationHeroBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationHeroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
