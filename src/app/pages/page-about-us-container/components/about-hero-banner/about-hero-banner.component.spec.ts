import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHeroBannerComponent } from './about-hero-banner.component';

describe('AboutHeroBannerComponent', () => {
  let component: AboutHeroBannerComponent;
  let fixture: ComponentFixture<AboutHeroBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHeroBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHeroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
