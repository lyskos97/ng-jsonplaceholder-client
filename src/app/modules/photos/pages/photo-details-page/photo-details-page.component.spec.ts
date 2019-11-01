import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDetailsPageComponent } from './photo-details-page.component';

describe('PhotoDetailsPageComponent', () => {
  let component: PhotoDetailsPageComponent;
  let fixture: ComponentFixture<PhotoDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
