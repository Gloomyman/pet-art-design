import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile.component';
import {HeaderModule} from '../header/header.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {LoginModule} from '../login/login.module';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    BrowserModule,
    LoginModule,
    HttpClientModule,
    HeaderModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule {
}
