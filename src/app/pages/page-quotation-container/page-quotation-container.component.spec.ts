import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuotationContainerComponent } from './page-quotation-container.component';

describe('PageQuotationContainerComponent', () => {
  let component: PageQuotationContainerComponent;
  let fixture: ComponentFixture<PageQuotationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageQuotationContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageQuotationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
