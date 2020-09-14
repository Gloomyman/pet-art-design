import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Shot} from '../../core/entity/Shot';
import {ShotService} from '../../core/service/shot/shot.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShotMapperService} from '../../core/mapper/shot-mapper.service';

@Component({
  selector: 'app-edit-shot-popup',
  templateUrl: './edit-shot-popup.component.html',
  styleUrls: ['./edit-shot-popup.component.scss']
})
export class EditShotPopupComponent implements OnInit {

  shotForm: FormGroup;
  selectedImage: File;

  constructor(private dialogRef: MatDialogRef<EditShotPopupComponent>,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public shot: Shot,
              private shotService: ShotService,
              private shotMapperService: ShotMapperService) {
    this.shotForm = this.formBuilder.group({
      title: [this.shot.title, Validators.required],
      description: [this.shot.description, Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSave() {
    const value = this.shotForm.value as Shot;
    if (this.shotForm.valid) {
      const uploadShotDTO = this.shotMapperService.toUpdateShotDTO(value);
      this.shotService.updateShot(this.shot.id, uploadShotDTO)
        .subscribe(value => {
          console.log('Saved', value);
          this.dialogRef.close();
        });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onFileSelected(event) {
    this.selectedImage = event.target.files[0] as File;

    this.showSelectedImage(this.selectedImage);
    this.shotForm
      .controls
      .imageUrl
      .patchValue(this.selectedImage);

  }

  showSelectedImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.shot.imageUrl = reader.result as string;
    };
  }
}
