import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreeningRoutingModule } from './screening-routing.module';
import { IndividualComponent } from './individual/individual.component';
import { OrganizationComponent } from './organization/organization.component';
import { MultipleComponent } from './multiple/multiple.component';
import { ServicehistoryComponent } from './servicehistory/servicehistory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from "@progress/kendo-angular-inputs";

@NgModule({
  declarations: [
    IndividualComponent,
    OrganizationComponent,
    MultipleComponent,
    ServicehistoryComponent,
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    ScreeningRoutingModule,
    ReactiveFormsModule,
    ButtonsModule,
    InputsModule

  ],
  exports:[]
})
export class ScreeningModule { }
