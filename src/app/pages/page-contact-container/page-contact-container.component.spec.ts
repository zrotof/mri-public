import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactContainerComponent } from './page-contact-container.component';

describe('PageContactContainerComponent', () => {
  let component: PageContactContainerComponent;
  let fixture: ComponentFixture<PageContactContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageContactContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageContactContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
