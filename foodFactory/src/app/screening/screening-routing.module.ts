import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualComponent } from './individual/individual.component';
import { MultipleComponent } from './multiple/multiple.component';
import { OrganizationComponent } from './organization/organization.component';
import { ServicehistoryComponent } from './servicehistory/servicehistory.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  // {path:'', pathMatch:'full',
      // children:[
        {path:'individual', component:IndividualComponent},
        {path:'multiple', component:MultipleComponent},
        {path:'organization', component:OrganizationComponent},
        {path:'history', component:ServicehistoryComponent},
        {path:'userdetails/:id', component:UserdetailsComponent}
      // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreeningRoutingModule { }
