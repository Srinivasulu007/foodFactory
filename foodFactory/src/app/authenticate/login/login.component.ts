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
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group ({
      username : ['',Validators.required],
      password : ['',Validators.required],
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.isSubmit = true;
    if(this.loginForm.valid) {
      const loginDetails = JSON.stringify(this.loginForm.value);
      localStorage.setItem('loginValues',loginDetails);
      this.router.navigate(['/home'])
    }
  }
}
