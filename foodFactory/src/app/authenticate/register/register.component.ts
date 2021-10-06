import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm:FormGroup | any;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group ({
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      acceptTerms:['',Validators.required],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('[7-9]\\d{9}')]],
        password:['',[Validators.required]],
      });
  }


  // Code for only enter numbers in input form
   keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

}
