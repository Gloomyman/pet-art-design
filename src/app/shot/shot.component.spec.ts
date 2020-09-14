import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShotComponent} from './shot.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {EditShotPopupComponent} from './edit-shot-popup/edit-shot-popup.component';
import {Shot} from '../core/entity/Shot';
import SpyObj = jasmine.SpyObj;

describe('ShotComponent', () => {
  let component: ShotComponent;
  let fixture: ComponentFixture<ShotComponent>;
  const mockMatDialog: SpyObj<MatDialog> = jasmine.createSpyObj(
    'MatDialog',
    ['open']
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ShotComponent],
      providers: [
        {provide: MatDialog, useValue: mockMatDialog}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dialog open', () => {
    // SETUP
    const shot = new Shot();
    component.shot = shot;

    // ACT
    component.openShotDialog();

    // VERIFY
    expect(mockMatDialog.open).toHaveBeenCalledWith(EditShotPopupComponent, {
      width: '33%',
      data: shot
    });
  });
});
