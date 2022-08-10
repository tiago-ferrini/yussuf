import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListSmallComponent } from './cards-list-small.component';

describe('CardsListSmallComponent', () => {
  let component: CardsListSmallComponent;
  let fixture: ComponentFixture<CardsListSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsListSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsListSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
