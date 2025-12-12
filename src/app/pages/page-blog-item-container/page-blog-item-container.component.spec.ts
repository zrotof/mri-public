import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogItemContainerComponent } from './page-blog-item-container.component';

describe('PageBlogItemContainerComponent', () => {
  let component: PageBlogItemContainerComponent;
  let fixture: ComponentFixture<PageBlogItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBlogItemContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBlogItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
