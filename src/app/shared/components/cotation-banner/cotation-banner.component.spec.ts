import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotationBannerComponent } from './cotation-banner.component';

describe('CotationBannerComponent', () => {
  let component: CotationBannerComponent;
  let fixture: ComponentFixture<CotationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotationBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
