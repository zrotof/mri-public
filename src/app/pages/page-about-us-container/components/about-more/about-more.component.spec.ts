import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMoreComponent } from './about-more.component';

describe('AboutMoreComponent', () => {
  let component: AboutMoreComponent;
  let fixture: ComponentFixture<AboutMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
