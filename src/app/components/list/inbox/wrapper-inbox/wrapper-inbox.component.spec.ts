import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperInboxComponent } from './wrapper-inbox.component';

describe('WrapperInboxComponent', () => {
  let component: WrapperInboxComponent;
  let fixture: ComponentFixture<WrapperInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperInboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
