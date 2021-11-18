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
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FloatingLabelModule } from "@progress/kendo-angular-label";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { NotificationModule } from '@progress/kendo-angular-notification';
import { DialogComponent } from '../shared/dialog/dialog.component';

@NgModule({
  declarations: [
    IndividualComponent,
    OrganizationComponent,
    MultipleComponent,
    ServicehistoryComponent,
    UserdetailsComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    ScreeningRoutingModule,
    ReactiveFormsModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    FloatingLabelModule,
    DateInputsModule,
    NotificationModule
  ],
  exports:[]
})
export class ScreeningModule { }
