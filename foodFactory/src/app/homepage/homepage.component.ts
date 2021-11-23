import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authenticate/auth/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    console.log('ffhh')
    // this.auth.test().subscribe(re=>{
    //   console.log(re)
    // })
  }
}
