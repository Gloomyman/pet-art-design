import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgMaterialModule} from '../angular-material/ng-material.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule
  ],
  providers: [],
})
export class LoginModule {
}
