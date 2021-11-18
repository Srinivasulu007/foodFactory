import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup | any;
  isSubmit:boolean = false;
  userCredintials : any;
  constructor(private fb:FormBuilder,private router:Router, private auth:AuthService) { 

  }

  ngOnInit() {
    this.loginForm = this.fb.group ({
      email : ['',Validators.required],
      password : ['',Validators.required],
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.isSubmit = true;
    if(this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe( data => {
        this.userCredintials = data;
        this.auth.setLocalStorage('loginValues',this.userCredintials.token);
      })
      this.router.navigate(['/home'])
    }
  }
}
