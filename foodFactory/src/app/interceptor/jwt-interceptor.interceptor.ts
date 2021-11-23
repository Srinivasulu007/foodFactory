import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../authenticate/auth/auth.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        'Cache-control' : 'no-cache',
        'Srinu':'hello'
      }
    });
    //   let token = localStorage.getItem('loginValues')
    // if(token) {
    //   request = request.clone ({
    //     setHeaders : {
    //       Authorization:`Bearer ${token}`
    //     }
    //   })
    // }
    return next.handle(request);
  }
}
