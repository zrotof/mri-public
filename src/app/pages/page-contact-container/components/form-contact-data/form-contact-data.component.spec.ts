import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactDataComponent } from './form-contact-data.component';

describe('FormContactDataComponent', () => {
  let component: FormContactDataComponent;
  let fixture: ComponentFixture<FormContactDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContactDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContactDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
