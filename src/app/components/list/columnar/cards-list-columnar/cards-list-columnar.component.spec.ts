import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListColumnarComponent } from './cards-list-columnar.component';

describe('CardsListColumnarComponent', () => {
  let component: CardsListColumnarComponent;
  let fixture: ComponentFixture<CardsListColumnarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsListColumnarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsListColumnarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
