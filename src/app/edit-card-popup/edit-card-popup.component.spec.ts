import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditCardPopupComponent} from './edit-card-popup.component';

describe('EditCardPopupComponent', () => {
  let component: EditCardPopupComponent;
  let fixture: ComponentFixture<EditCardPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditCardPopupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
