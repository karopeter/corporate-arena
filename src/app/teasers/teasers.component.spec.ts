import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeasersComponent } from './teasers.component';

describe('TeasersComponent', () => {
  let component: TeasersComponent;
  let fixture: ComponentFixture<TeasersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeasersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeasersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
