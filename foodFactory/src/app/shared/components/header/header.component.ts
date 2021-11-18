import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/authenticate/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  // public anchor!: ElementRef<any>;
  username:string = "Srinivasulu";
  userRole:string = "Fund Aquire";
//   public items: any[] = [
//     {
//         text: 'Screening',
//         items: [{ text: 'Item1.1' }, { text: 'Item1.2', items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }] }]
//     },
// ];
  @ViewChild("anchor", { static: false }) anchor : ElementRef<any> | undefined;
  public kendokaAvatar =
    "https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png";

  public margin = { horizontal: -46, vertical: 7 };
 show:boolean = false;
 signedIn:BehaviorSubject<boolean>;

  public onToggle(): void {
    this.show = !this.show;
  }
  constructor(private router:Router,private zone: NgZone, private auth:AuthService) { 
    this.signedIn = this.auth.singedIn;
  }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      window.addEventListener("resize", () => {
        if (this.show) {
          this.zone.run(() => this.onToggle());
        }
      });
    });
  }


}
