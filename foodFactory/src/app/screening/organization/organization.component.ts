import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertsService } from 'src/app/shared/services/alert/alerts.service';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  public data: string[] = ["Finance", "Commercial", "Oragnization"];
  public unit: string[] = ["Treasuary", "Bank",];
  public request:string[] = ["Refund","Credits","Debits"];
  public gender:string[] = ["Male","Female","Others"];
  public country:string[] = ["India","USA","America"];
  public idtype:string[] = ["Driving Licence","Aadhar","PanCard"];
  public issuance:string[] = ["India","USA","America"];
  isSubmit:boolean = false;
  public disabled = true;
  public organizationForm : FormGroup | any;
  // segement.value:boolean = true;
  
  constructor(private fb:FormBuilder, private api:ApiService, private router:Router, private alert:AlertsService) { }

  ngOnInit() {
    this.organizationForm = this.fb.group({
      segment:['',Validators.required],
      businessunit:[{value:'',disabled:true}],
      request:[''],
      standard:[''],
      firstname:['',Validators.required],
      middlename:[''],
      lastname:['',Validators.required],
      date:['',Validators.required],
      gender:[''],
      countryselect:['',],
      address:this.fb.group({
        address1:[''],
        address2:[''],
        city:[''],
        state:[''],
        zipcode:[''],
        country:['',Validators.required],
      }),
      idnumber:['',Validators.required],
      idtype:[''],
      issuance:['']
    })
  }


  selectionChange(event:any,item:any) {
    console.log(event)
    if(event) {
      this.organizationForm.get('businessunit').enable()
    if(event =='Commercial') this.unit=['srinu','venki']
    }
  }

  
  onSubmit() {
    this.isSubmit = true;
    this.organizationForm.markAllAsTouched();
    if(this.organizationForm.invalid) {
      return;
    }
    this.api.postData(this.organizationForm.value).subscribe(resp=>{
      if(resp) {
        this.alert.success('submit sucessful', {keepAfterRouterChange:true});
        this.router.navigate(['/screening/history'])
      }
    },error=>{
      this.alert.error(error);
    });
  }

}
