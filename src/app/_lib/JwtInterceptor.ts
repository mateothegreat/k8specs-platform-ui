import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (LoginService.isLoggedIn()) {

            request = request.clone({

                setHeaders: {

                    Authorization: `Bearer ${LoginService.getToken()}`

                }

            });

        }

        return next.handle(request);

    }

}
