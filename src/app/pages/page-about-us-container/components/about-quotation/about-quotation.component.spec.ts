import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutQuotationComponent } from './about-quotation.component';

describe('AboutQuotationComponent', () => {
  let component: AboutQuotationComponent;
  let fixture: ComponentFixture<AboutQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutQuotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
