import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditShotPopupComponent} from './edit-shot-popup.component';

describe('EditShotPopupComponent', () => {
  let component: EditShotPopupComponent;
  let fixture: ComponentFixture<EditShotPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditShotPopupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShotPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
