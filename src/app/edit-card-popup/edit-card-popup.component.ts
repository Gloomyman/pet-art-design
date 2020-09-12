import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Card} from '../core/entity/Card';
import {CardService} from '../core/service/card/card.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CardMapperService} from '../core/mapper/card-mapper.service';

@Component({
  selector: 'app-edit-card-popup',
  templateUrl: './edit-card-popup.component.html',
  styleUrls: ['./edit-card-popup.component.scss']
})
export class EditCardPopupComponent implements OnInit {

  cardForm: FormGroup;
  selectedImage: File;

  constructor(private dialogRef: MatDialogRef<EditCardPopupComponent>,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public card: Card,
              private cardService: CardService,
              private cardMapperService: CardMapperService) {
    this.cardForm = this.formBuilder.group({
      imageUrl: [null, Validators.required],
      title: [this.card.title, Validators.required],
      description: [this.card.description, Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSave() {
    const value = this.cardForm.value as Card;
    console.log(value);
    if (this.cardForm.valid) {
      const uploadCardDTO = this.cardMapperService.toUpdateCardDTO(value);
      this.cardService.updateCard(this.card.id, uploadCardDTO)
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
    this.cardForm
      .controls
      .imageUrl
      .patchValue(this.selectedImage);

  }

  showSelectedImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.card.imageUrl = reader.result as string;
    };
  }
}
