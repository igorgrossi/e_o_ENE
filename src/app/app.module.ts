import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageLoadingComponent } from './page-loading/page-loading.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageHomeComponent,
    PageLoadingComponent,
    PageRegisterComponent,
    PageForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
