import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemSmallComponent } from './card-item-small.component';

describe('CardItemSmallComponent', () => {
  let component: CardItemSmallComponent;
  let fixture: ComponentFixture<CardItemSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItemSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
