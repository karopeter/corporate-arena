import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogApprovedComponent } from './blog-approved.component';

describe('BlogApprovedComponent', () => {
  let component: BlogApprovedComponent;
  let fixture: ComponentFixture<BlogApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
