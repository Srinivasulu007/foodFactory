import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-servicehistory',
  templateUrl: './servicehistory.component.html',
  styleUrls: ['./servicehistory.component.scss']
})
export class ServicehistoryComponent implements OnInit {

  tableData:any;
  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getData();
    
  }
  getData() {
    this.tableData = this.api.getData();
  }

 

}
