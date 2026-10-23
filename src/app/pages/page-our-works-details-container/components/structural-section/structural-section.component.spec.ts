import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralSectionComponent } from './structural-section.component';

describe('StructuralSectionComponent', () => {
  let component: StructuralSectionComponent;
  let fixture: ComponentFixture<StructuralSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
