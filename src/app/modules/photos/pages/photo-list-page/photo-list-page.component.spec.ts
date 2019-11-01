import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListPageComponent } from './photo-list-page.component';

describe('PhotoListPageComponent', () => {
  let component: PhotoListPageComponent;
  let fixture: ComponentFixture<PhotoListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
