import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageLoadingComponent } from './page-loading/page-loading.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';

const routes: Routes = [
  {
    path: "",
    component: PageLoadingComponent,
  },
  {
    path: "login",
    component: PageLoginComponent,
  },
  {
    path: "home",
    component: PageHomeComponent,
  },
  {
    path: "register",
    component: PageRegisterComponent,
  },
  {
    path: "forgot_password",
    component: PageForgotPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
