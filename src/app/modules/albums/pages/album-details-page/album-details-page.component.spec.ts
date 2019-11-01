import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailsPageComponent } from './album-details-page.component';

describe('AlbumDetailsPageComponent', () => {
  let component: AlbumDetailsPageComponent;
  let fixture: ComponentFixture<AlbumDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
