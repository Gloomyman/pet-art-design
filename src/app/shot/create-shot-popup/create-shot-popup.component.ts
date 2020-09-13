import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Shot} from '../../core/entity/Shot';
import {ShotService} from '../../core/service/shot/shot.service';
import {ShotMapperService} from '../../core/mapper/shot-mapper.service';

@Component({
  selector: 'app-create-shot-popup',
  templateUrl: './create-shot-popup.component.html',
  styleUrls: ['./create-shot-popup.component.scss']
})
export class CreateShotPopupComponent implements OnInit {

  shotForm: FormGroup;
  selectedImage: File;

  constructor(private dialogRef: MatDialogRef<CreateShotPopupComponent>,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public shot: Shot,
              private shotService: ShotService,
              private shotMapperService: ShotMapperService) {
    this.shotForm = this.formBuilder.group({
      imageUrl: [null, Validators.required],
      title: [this.shot.title, Validators.required],
      description: [this.shot.description, Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSave() {
    const value = this.shotForm.value as Shot;
    console.log(value);
    if (this.shotForm.valid) {
      const createShotDTO = this.shotMapperService.toCreateShotDTO(value, this.selectedImage);
      this.shotService.createShot(createShotDTO)
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
    console.log(this.selectedImage);

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
