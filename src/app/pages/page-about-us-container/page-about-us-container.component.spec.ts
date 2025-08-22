import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutUsContainerComponent } from './page-about-us-container.component';

describe('PageAboutUsContainerComponent', () => {
  let component: PageAboutUsContainerComponent;
  let fixture: ComponentFixture<PageAboutUsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutUsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutUsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
