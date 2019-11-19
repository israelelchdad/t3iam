import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAlbumComponent } from './item-album.component';

describe('ItemAlbumComponent', () => {
  let component: ItemAlbumComponent;
  let fixture: ComponentFixture<ItemAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
