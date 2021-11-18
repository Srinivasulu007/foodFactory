import { DialogService } from './../../shared/dialog/dialog.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-servicehistory',
  templateUrl: './servicehistory.component.html',
  styleUrls: ['./servicehistory.component.scss']
})
export class ServicehistoryComponent implements OnInit {
  public type: string[] = ["All", "Commercial"];
  public duration: string[] = [ "Today","Last 7 Days","Last 1 month"];
  tableData:any;
  filterForm:FormGroup | any;
  tempData:any;
  userData:any;
  constructor(private api:ApiService, private route:ActivatedRoute, private fb:FormBuilder,private dialogService:DialogService) { }

  ngOnInit() {
    this.filterForm = this.fb.group({
      type:[''],
      duration:['']
    })
    this.getData();
  }

  getData() {
    // this.tableData = this.api.getData();
    // this.tempData = JSON.parse(JSON.stringify(this.api.getData()));
    this.api.getData().subscribe((data:any) => {
      // this.userData = JSON.parse(JSON.stringify(data));
      this.userData = data.data;
      console.log("this get data", this.userData);
    })
  }

  // getUserData() {
  //   this.api.getSampleData().subscribe( data => {
  //     this.userData = data;
  //   })
  // }

  filterData() {
    console.log(this.filterForm.value);
    this.tableData = this.tempData.filter((x:any)=>{
      let type = this.filterForm.value.type
      if(type) {
        return  type =='All' ? true : x.Type.toLowerCase() === type.toLowerCase()
      } 
      return false
    })
  }
  reset() {
    this.filterForm.reset();
  }

  openModel(id:any) {
    console.log(id)
  this.dialogService.open(id)
  }
 

  closeModel(id:any) {
    this.dialogService.close(id)
    }


}
