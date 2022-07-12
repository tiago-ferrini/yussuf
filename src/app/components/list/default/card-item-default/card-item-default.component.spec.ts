import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemDefaultComponent } from './card-item-default.component';

describe('CardItemDefaultComponent', () => {
  let component: CardItemDefaultComponent;
  let fixture: ComponentFixture<CardItemDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItemDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
