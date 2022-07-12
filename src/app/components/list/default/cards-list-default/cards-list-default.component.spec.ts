import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListDefaultComponent } from './cards-list-default.component';

describe('CardsListDefaultComponent', () => {
  let component: CardsListDefaultComponent;
  let fixture: ComponentFixture<CardsListDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsListDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsListDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
