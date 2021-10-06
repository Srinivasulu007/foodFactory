import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgotPasswordComponent } from './authenticate/forgot-password/forgot-password.component';
import { RegisterComponent } from './authenticate/register/register.component';
import { LoginComponent } from './authenticate/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgot', component:ForgotPasswordComponent},
  {path:'home', component:HomepageComponent},
  {path:'profile/:id/:name', component:UserProfileComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'screening', loadChildren:() => import('./screening/screening.module').then(m => m.ScreeningModule)},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
