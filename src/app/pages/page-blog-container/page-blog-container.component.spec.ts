import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogContainerComponent } from './page-blog-container.component';

describe('PageBlogContainerComponent', () => {
  let component: PageBlogContainerComponent;
  let fixture: ComponentFixture<PageBlogContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBlogContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBlogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
