import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLatestWorksComponent } from './home-latest-works.component';

describe('HomeLatestWorksComponent', () => {
  let component: HomeLatestWorksComponent;
  let fixture: ComponentFixture<HomeLatestWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLatestWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLatestWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
