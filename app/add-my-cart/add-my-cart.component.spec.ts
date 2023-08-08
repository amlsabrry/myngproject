import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyCartComponent } from './add-my-cart.component';

describe('AddMyCartComponent', () => {
  let component: AddMyCartComponent;
  let fixture: ComponentFixture<AddMyCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMyCartComponent]
    });
    fixture = TestBed.createComponent(AddMyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
