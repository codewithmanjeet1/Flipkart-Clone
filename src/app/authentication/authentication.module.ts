import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { HeaderModule } from "../layout/header/header.module";
import { FooterModule } from "../layout/footer/footer.module";


@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    HeaderModule,
    FooterModule
]
})
export class AuthenticationModule { }
