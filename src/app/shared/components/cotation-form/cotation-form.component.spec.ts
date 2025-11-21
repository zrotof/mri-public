import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotationFormComponent } from './cotation-form.component';

describe('CotationFormComponent', () => {
  let component: CotationFormComponent;
  let fixture: ComponentFixture<CotationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
