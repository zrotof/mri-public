import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemModalComponent } from './project-item-modal.component';

describe('ProjectItemModalComponent', () => {
  let component: ProjectItemModalComponent;
  let fixture: ComponentFixture<ProjectItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectItemModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
