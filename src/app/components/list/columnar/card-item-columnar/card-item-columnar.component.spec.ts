import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemColumnarComponent } from './card-item-columnar.component';

describe('CardItemColumnarComponent', () => {
  let component: CardItemColumnarComponent;
  let fixture: ComponentFixture<CardItemColumnarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItemColumnarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemColumnarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
