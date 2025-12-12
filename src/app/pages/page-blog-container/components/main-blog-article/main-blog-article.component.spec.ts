import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBlogArticleComponent } from './main-blog-article.component';

describe('MainBlogArticleComponent', () => {
  let component: MainBlogArticleComponent;
  let fixture: ComponentFixture<MainBlogArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBlogArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBlogArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
