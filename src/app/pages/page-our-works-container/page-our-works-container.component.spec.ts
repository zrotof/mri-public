import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOurWorksContainerComponent } from './page-our-works-container.component';

describe('PageOurWorksContainerComponent', () => {
  let component: PageOurWorksContainerComponent;
  let fixture: ComponentFixture<PageOurWorksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOurWorksContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOurWorksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
