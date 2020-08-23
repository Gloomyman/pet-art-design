import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/service/auth/auth.service';
import {AuthDTO} from '../core/dto/auth-d-t-o';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
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
    if (this.form.valid) {
      const authDTO = new AuthDTO(this.form.controls.email.value, this.form.controls.password.value);
      console.log(authDTO);
      this.authService.login(authDTO);
    }
  }

}
