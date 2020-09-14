import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditShotPopupComponent} from './edit-shot-popup.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ShotMapperService} from '../../core/mapper/shot-mapper.service';
import {Shot} from '../../core/entity/Shot';
import {ShotService} from '../../core/service/shot/shot.service';
import {UpdateShotDTO} from '../../core/dto/update-shot-dto';
import {of} from 'rxjs';
import SpyObj = jasmine.SpyObj;

describe('EditShotPopupComponent', () => {
  let component: EditShotPopupComponent;
  let fixture: ComponentFixture<EditShotPopupComponent>;
  const mockShotMapperService: SpyObj<ShotMapperService> = jasmine.createSpyObj(
    'shotMapperService',
    ['toUpdateShotDTO']);
  const mockShotService: SpyObj<ShotService> = jasmine.createSpyObj(
    'shotService',
    ['updateShot']);
  const shot = {title: 'testTitle', description: ''};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [EditShotPopupComponent],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: shot},
        {provide: ShotMapperService, useValue: mockShotMapperService},
        {provide: ShotService, useValue: mockShotService}
      ]
    })
      .compileComponents();
    mockShotService.updateShot.and.returnValue(of());
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShotPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ', () => {
    // SETUP
    const controls = component.shotForm.controls;

    // ACT
    console.log();

    // VERIFY
    expect(controls.title).toBeTruthy();
    expect(controls.description).toBeTruthy();

  });

  it('onSave should call toUpdateShotDTO if form is valid', () => {
    // SETUP
    const formValue = {title: 'testTitle', description: 'testDescription'} as Shot;
    component.shotForm.controls.title.patchValue('testTitle');
    component.shotForm.controls.description.patchValue('testDescription');

    // ACT
    component.onSave();

    // VERIFY
    expect(mockShotMapperService.toUpdateShotDTO).toHaveBeenCalledWith(formValue);
  });

  it('onSave should not call toUpdateShotDTO if form is not valid', () => {
    // SETUP
    const localMockShotMapperService: SpyObj<ShotMapperService> = jasmine.createSpyObj(
      'shotMapperService',
      ['toUpdateShotDTO']);

    TestBed.configureCompiler({
      providers: [
        {provide: ShotMapperService, useValue: localMockShotMapperService},
      ]
    });

    const localFixture = TestBed.createComponent(EditShotPopupComponent);
    const localComponent = localFixture.componentInstance;
    localComponent.shotForm.controls.title.patchValue(null);

    // ACT
    localComponent.onSave();

    // VERIFY
    expect(localMockShotMapperService.toUpdateShotDTO).toHaveBeenCalledTimes(0);
  });

  it('onSave should call updateShot if formValid', () => {
    // SETUP
    component.shotForm.controls.title.patchValue('testTitle');
    component.shotForm.controls.description.patchValue('testDescription');

    component.shot.id = 123;
    const updateShotDTO: UpdateShotDTO = new UpdateShotDTO();
    updateShotDTO.title = 'testTitle';
    updateShotDTO.description = 'testDescription';
    mockShotMapperService.toUpdateShotDTO.and.returnValue(updateShotDTO);

    // ACT
    component.onSave();

    // VERIFY
    expect(mockShotService.updateShot).toHaveBeenCalledWith(123, updateShotDTO);
  });

  it('onSave should not call updateShot if form is not valid', () => {
    // SETUP
    const localMockShotService: SpyObj<ShotService> = jasmine.createSpyObj(
      'shotService',
      ['updateShot']);

    TestBed.configureCompiler({
      providers: [
        {provide: ShotService, useValue: localMockShotService},
      ]
    });

    const localFixture = TestBed.createComponent(EditShotPopupComponent);
    const localComponent = localFixture.componentInstance;
    localComponent.shotForm.controls.title.patchValue(null);

    // ACT
    localComponent.onSave();

    // VERIFY
    expect(localMockShotService.updateShot).toHaveBeenCalledTimes(0);
  });
});
