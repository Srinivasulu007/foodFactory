import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './authenticate/login/login.component';
import { RegisterComponent } from './authenticate/register/register.component';
import { ForgotPasswordComponent } from './authenticate/forgot-password/forgot-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FilterPipe } from './shared/services/pipe/filter.pipe';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { PopupModule } from '@progress/kendo-angular-popup';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';

import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MenuModule } from '@progress/kendo-angular-menu';
import { JwtInterceptorInterceptor } from './interceptor/jwt-interceptor.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomepageComponent,
    UserProfileComponent,
    NotFoundComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LabelModule,
    DropDownsModule,
    DateInputsModule,
    NotificationModule,
    ButtonsModule,
    DialogsModule,
    NavigationModule,
    PopupModule,
    IconsModule,
    IndicatorsModule,
    InputsModule,
    LayoutModule,
    MenuModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:JwtInterceptorInterceptor, multi:true}],
  exports:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
