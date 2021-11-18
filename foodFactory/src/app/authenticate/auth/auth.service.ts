import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  singedIn = new BehaviorSubject(false);

 apiUrl = "http://localhost:9000/api/auth";
  constructor(private http:HttpClient) { }

  register(user:any) {
    return this.http.post(`${this.apiUrl}/register`,user)
  }

  login(approver:any) {
    console.log("==========",approver)
    return this.http.post(`${this.apiUrl}/login`,approver)
  }

 setLocalStorage(key:any,val:any) {
    window.localStorage.setItem(key, val);
  }

  getLocalStorage(key:any) {
    window.localStorage.getItem(key);
  }


}


