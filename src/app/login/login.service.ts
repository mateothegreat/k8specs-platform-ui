import { Injectable } from '@angular/core';
import { DialogService } from '../_lib/dialog.service';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ComponentType } from '@angular/cdk/portal';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RequestResult } from '../_lib/RequestResult';

@Injectable({ providedIn: 'root' })
export class LoginService {


    public constructor(private dialogService: DialogService,
                       private httpClient: HttpClient) {

    }

    public static getToken(): string {

        return localStorage.getItem('token');

    }

    public static isLoggedIn(): boolean {

        const helper = new JwtHelperService();

        const token: string = localStorage.getItem('token');

        if (token) {

            return !helper.isTokenExpired(token);

        }

    }

    public isLoggedIn(): boolean {

        const helper = new JwtHelperService();

        const token: string = localStorage.getItem('token');

        if (token) {

            return !helper.isTokenExpired(token);

        }

    }

    public open<t>(component: ComponentType<t>): void {

        this.dialogService.open<t>(component, {

            width: '240px',
            height: '300px'

        });

    }

    public close(): void {

        this.dialogService.close();

    }

    public login(email: string, password: string): Observable<boolean> {

        let subject: Subject<boolean> = new Subject();

        this.httpClient.post(`${environment.API_BASE}/users/login`, { email, password }).subscribe((result: RequestResult<any>) => {

            if (!RequestResult.isError(result)) {

                localStorage.setItem('token', result.message);

                subject.next(LoginService.isLoggedIn());

            } else {

                subject.next(false);

            }

        });

        return subject;

    }

    public logout(): void {

        localStorage.removeItem('token');

        window.location.href = '/';

    }

}
