import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RequestSearch } from '../_lib/RequestSearch';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    public constructor(private httpClient: HttpClient) {

    }

    public getPosts(requestSearch: RequestSearch): Observable<any> {

        return this.httpClient.get(`${environment.API_BASE}/posts/search?sort=${requestSearch.sort}&direction=${requestSearch.direction}&count=${requestSearch.count}&pageSize=${requestSearch.pageSize}&limit=${requestSearch.limit}&page=${requestSearch.page - 1}`);

    }

    public getPostsByUserDisplayName(displayName: string): Observable<any> {

        return this.httpClient.get(`${environment.API_BASE}/posts/user/${displayName}`);

    }

    public getPostByNameAndUserDisplayName(displayName: string, postName: string): Observable<any> {

        return this.httpClient.get(`${environment.API_BASE}/posts/user/${displayName}/${postName}`);

    }

    public getTags(): Observable<any> {

        return this.httpClient.get(`${environment.API_BASE}/tags/search`);

    }

}
