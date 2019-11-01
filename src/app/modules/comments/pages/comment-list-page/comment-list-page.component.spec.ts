import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListPageComponent } from './comment-list-page.component';

describe('CommentListPageComponent', () => {
  let component: CommentListPageComponent;
  let fixture: ComponentFixture<CommentListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
