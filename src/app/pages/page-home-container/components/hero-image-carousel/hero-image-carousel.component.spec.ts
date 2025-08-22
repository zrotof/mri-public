import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageCarouselComponent } from './hero-image-carousel.component';

describe('HeroImageCarouselComponent', () => {
  let component: HeroImageCarouselComponent;
  let fixture: ComponentFixture<HeroImageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroImageCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
