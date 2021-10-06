import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreeningRoutingModule } from './screening-routing.module';
import { IndividualComponent } from './individual/individual.component';
import { OrganizationComponent } from './organization/organization.component';
import { MultipleComponent } from './multiple/multiple.component';
import { ServicehistoryComponent } from './servicehistory/servicehistory.component';


@NgModule({
  declarations: [
    IndividualComponent,
    OrganizationComponent,
    MultipleComponent,
    ServicehistoryComponent
  ],
  imports: [
    CommonModule,
    ScreeningRoutingModule
  ],
  exports:[]
})
export class ScreeningModule { }
