import {Component, OnInit} from '@angular/core';
import {UserService} from '../core/service/user/user.service';
import {User} from '../core/entity/User';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  edit: boolean = false;
  userFormGroup: FormGroup;
  H;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) {
    this.userFormGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(user => {
        this.user = user;
        this.userFormGroup.addControl('bio', new FormControl('', Validators.required));
      });
  }

  onEdit(): void {
    this.edit = true;
  }

  onClose(): void {
    this.edit = false;
    this.resetForm();
  }

  onSave(): void {
    this.edit = false;

    if (this.userFormGroup.valid) {
      console.log(this.userFormGroup.value);
      this.user.bio = this.userFormGroup.controls.bio.value;
    }
  }

  resetForm(): void {
    this.userFormGroup.controls.bio.setValue(this.user.bio);
  }
}
