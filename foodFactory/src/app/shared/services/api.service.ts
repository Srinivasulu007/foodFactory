import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 history = [
    {
       "Name":"Srinu",
       "Units":1,
       "Type":"units",
       "Date":"09-10-2021",
       "Address":"1-2,Hyderabad",
       "Id":"21",
       "ModifiedBy":"Srinivas",
       "ModifiedDate":"10-10-2021",
       "Status":"Pending"
    },
    {
      "Name":"Chinna",
      "Units":2,
      "Type":"Units",
      "Date":"09-10-2021",
      "Address":"1-2,Hyderabad",
      "Id":"21",
      "ModifiedBy":"Srinivas",
      "ModifiedDate":"10-10-2021",
      "Status":"Complete"
   },
  ]  


  // apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  apiUrl = "http://localhost:9000/api/user";
  constructor(private http:HttpClient) { }

  handleError(error:HttpErrorResponse) {
    let errorMessage = "Unknown Error!";
    if(error.error instanceof ErrorEvent) {
      //client side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server side errors
      if(error.status === 401) {
        errorMessage = "This server side error"
      }
      errorMessage = `Error code: ${error.status}\n Message: ${error.message}`;
    }
    return throwError(errorMessage)
  }


  //api for post
  postData(post:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createUser`,post)
  }

  // getSampleData(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}`)
  //     .pipe(retry(1), 
  //       catchError(this.handleError));
  // }

  //get Data
  getData() {
    // return this.history;
    return this.http.get(`${this.apiUrl}/getUserDetails`)
  }

    // API for userDetails shown
    userDetails(id:number) {
     return this.http.get(`${this.apiUrl}`+id)
    }



}


