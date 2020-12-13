import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficUpdateArticleComponent } from './traffic-update-article.component';

describe('TrafficUpdateArticleComponent', () => {
  let component: TrafficUpdateArticleComponent;
  let fixture: ComponentFixture<TrafficUpdateArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficUpdateArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficUpdateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
