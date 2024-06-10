import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class authInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {

  }      
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();  
    if(token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })
      }
      return next.handle(request);
  }
}

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
