import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UsersProfileService {

    public constructor(private httpClient: HttpClient) {

    }

    public getProfile(displayName: string): Observable<any> {

        return this.httpClient.get(`${environment.API_BASE}/users/profile/${displayName}`);

    }

}
