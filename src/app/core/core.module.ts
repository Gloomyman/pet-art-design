import {NgModule} from '@angular/core';
import {AuthService} from './service/auth/auth.service';
import {AuthDTO} from './dto/auth-d-t-o';
import {NgxWebstorageModule} from 'ngx-webstorage';

@NgModule({
  declarations: [
    AuthDTO,
    AuthService
  ],
  imports: [NgxWebstorageModule.forRoot()],
  providers: [],
})
export class CoreModule {
}
