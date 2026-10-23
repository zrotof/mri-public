import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAfterSectionComponent } from './before-after-section.component';

describe('BeforeAfterSectionComponent', () => {
  let component: BeforeAfterSectionComponent;
  let fixture: ComponentFixture<BeforeAfterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeAfterSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeforeAfterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
