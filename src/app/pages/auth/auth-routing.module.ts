import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/auth/pages/login/login.component';
import { SingupComponent } from 'src/app/pages/auth/pages/singup/singup.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path: "", component: AuthComponent, children: [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "signup", component: SingupComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
