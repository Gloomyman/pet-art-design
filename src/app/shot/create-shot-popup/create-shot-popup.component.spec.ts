import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateShotPopupComponent} from './create-shot-popup.component';

describe('CreateShotPopupComponent', () => {
  let component: CreateShotPopupComponent;
  let fixture: ComponentFixture<CreateShotPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateShotPopupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShotPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
