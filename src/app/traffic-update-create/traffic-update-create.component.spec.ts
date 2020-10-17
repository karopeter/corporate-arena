import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficUpdateCreateComponent } from './traffic-update-create.component';

describe('TrafficUpdateCreateComponent', () => {
  let component: TrafficUpdateCreateComponent;
  let fixture: ComponentFixture<TrafficUpdateCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficUpdateCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficUpdateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
