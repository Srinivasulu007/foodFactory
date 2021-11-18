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
      'Cache-control' : 'no-cache'
    }
  });

    // let currentUser = this.auth.
    // if(currentUser && currentUser.token) {
    //   request = request.clone ({
    //     setHeaders : {
    //       Authorization:`Bearer ${currentUser.token}`
    //     }
    //   })
    // }
    return next.handle(request);
  }
}
