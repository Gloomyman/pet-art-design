import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  get email(): FormControl | null {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl | null {
    return this.form.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.password.invalid);
    console.log(this.password.value);
    console.log(this.form.value);
  }

}