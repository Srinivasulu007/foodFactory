import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { first } from 'rxjs/operators';
import { AlertsService } from 'src/app/shared/services/alert/alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  individualData:FormGroup | any;
  isSubmit:boolean = false;
  business: string[] = ['one', 'two'];
  userData:any;
  
  constructor(private fb:FormBuilder,private api:ApiService, private alert:AlertsService,private router:Router) { }

  ngOnInit() {
    this.individualData = this.fb.group({
      business:['',Validators.required],
      units:['',Validators.required],
      firstname:['',Validators.required],
      middlename:[''],
      lastname:['',Validators.required],
      standard:[''],
      high:[''],
      date:[''],
      gender:[''],
      address:[''],
      address2:[''],
      address3:[''],
      area:[''],
      city:[''],
      state:[''],
      selectid:['',Validators.required],
      insurance:['',Validators.required]
    })

    // this.individualData.patchValue({
    //   business:this.test.business
    // })
  }

  onSubmit() {
    this.isSubmit = true;
    console.log(this.individualData.value);   
     if(this.individualData.valid) {
      const individualDetails = JSON.stringify(this.individualData.value);
      localStorage.setItem('individualInfo',individualDetails);
      this.router.navigate(['/screening/history'])
    }

    // this.api.postData(this.individualData.value).pipe(first()).subscribe ( { next: () => {
    //   this.alert.success('Submit Successful', {keepAfterRouteChange:true});
    // },
    // error: error => {
    //   this.alert.error(error);
    // }

    this.api.postData(this.individualData.value).subscribe (data => {
      this.userData = data;
      console.log("api post data",this.userData)
    });
    
      // data => {
      // this.userData = data;
      // console.log("api data",this.userData)
  }

}
