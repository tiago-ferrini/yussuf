import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListInboxComponent } from './items-list-inbox.component';

describe('ItemsListInboxComponent', () => {
  let component: ItemsListInboxComponent;
  let fixture: ComponentFixture<ItemsListInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsListInboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsListInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
