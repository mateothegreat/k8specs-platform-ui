import { Injectable } from '@angular/core';
import { DialogService } from '../../_lib/dialog.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ComponentType } from '@angular/cdk/portal';
import { Post } from '../../post/post';

@Injectable({
    providedIn: 'root'
})
export class ValidatorPostService {

    public file: Post;

    public constructor(private dialogService: DialogService,
                       private httpClient: HttpClient) {

    }

    public open<t>(file: Post, component: ComponentType<t>): void {

        this.file = file;

        this.dialogService.open(component, { width: '500px', height: '415px' });

    }

    public close(): void {

        this.dialogService.close();

    }

    public post(payload: any): Observable<any> {

        payload.value = this.file.value;

        return this.httpClient.post(`${environment.API_BASE}/posts`, payload);

    }

}
