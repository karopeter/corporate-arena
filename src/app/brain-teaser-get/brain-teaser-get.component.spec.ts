import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainTeaserGetComponent } from './brain-teaser-get.component';

describe('BrainTeaserGetComponent', () => {
  let component: BrainTeaserGetComponent;
  let fixture: ComponentFixture<BrainTeaserGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainTeaserGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainTeaserGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
