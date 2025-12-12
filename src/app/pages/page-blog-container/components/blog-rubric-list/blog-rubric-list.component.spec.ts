import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRubricListComponent } from './blog-rubric-list.component';

describe('BlogRubricListComponent', () => {
  let component: BlogRubricListComponent;
  let fixture: ComponentFixture<BlogRubricListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogRubricListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogRubricListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
