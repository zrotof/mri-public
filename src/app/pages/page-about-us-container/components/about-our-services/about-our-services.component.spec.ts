import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurServicesComponent } from './about-our-services.component';

describe('AboutOurServicesComponent', () => {
  let component: AboutOurServicesComponent;
  let fixture: ComponentFixture<AboutOurServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutOurServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
