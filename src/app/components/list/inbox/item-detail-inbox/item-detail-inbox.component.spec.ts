import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailInboxComponent } from './item-detail-inbox.component';

describe('ItemDetailInboxComponent', () => {
  let component: ItemDetailInboxComponent;
  let fixture: ComponentFixture<ItemDetailInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailInboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetailInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
