import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadMapProcessComponent } from './road-map-process.component';

describe('RoadMapProcessComponent', () => {
  let component: RoadMapProcessComponent;
  let fixture: ComponentFixture<RoadMapProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadMapProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadMapProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
