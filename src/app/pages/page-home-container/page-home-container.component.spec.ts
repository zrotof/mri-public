import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeContainerComponent } from './page-home-container.component';

describe('PageHomeContainerComponent', () => {
  let component: PageHomeContainerComponent;
  let fixture: ComponentFixture<PageHomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHomeContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
