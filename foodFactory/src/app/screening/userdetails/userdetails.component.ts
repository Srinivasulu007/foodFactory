import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  userInfo:any;

  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getUserData()
  }


  getUserData() {
    let id = this.route.snapshot.params['id'];
    this.api.userDetails(id).subscribe( data => {
      this.userInfo = data;
    })
  }
}
