import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailsPageComponent } from './comment-details-page.component';

describe('CommentDetailsPageComponent', () => {
  let component: CommentDetailsPageComponent;
  let fixture: ComponentFixture<CommentDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
