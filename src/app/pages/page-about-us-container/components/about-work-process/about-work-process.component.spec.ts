import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorkProcessComponent } from './about-work-process.component';

describe('AboutWorkProcessComponent', () => {
  let component: AboutWorkProcessComponent;
  let fixture: ComponentFixture<AboutWorkProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWorkProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWorkProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
