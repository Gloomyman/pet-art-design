import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Card} from '../core/entity/Card';
import {CardService} from '../core/service/card/card.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-card-popup',
  templateUrl: './edit-card-popup.component.html',
  styleUrls: ['./edit-card-popup.component.scss']
})
export class EditCardPopupComponent implements OnInit {

  cardForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<EditCardPopupComponent>,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public card: Card,
              private cardService: CardService) {
  }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      imageUrl: [this.card.imageUrl, Validators.required],
      title: [this.card.title, Validators.required],
      description: [this.card.description, Validators.required]
    });
  }

  onSave() {
    if (this.cardForm.valid) {
      this.cardService.updateCard(this.cardForm.value as Card)
        .subscribe(value => {
          console.log('Saved', value);
        });
      this.dialogRef.close();
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
