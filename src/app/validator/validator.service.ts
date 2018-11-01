import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ValidatorService {

    public constructor(private httpClient: HttpClient) {

    }

    public validate(payload: any): Observable<any> {

        return this.httpClient.post('https://validator.k8specs.com/validate', payload);

    }

}
