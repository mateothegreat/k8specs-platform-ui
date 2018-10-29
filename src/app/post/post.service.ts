import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    public data: any = '';

    public tabs: Array<{}> = [

        {

            label: 'deployment.yaml'

        }, {

            label: 'service.yaml'

        }, {

            label: 'asd.yaml'

        }, {

            label: 'a3f3f.yaml'

        }, {

            label: 'asdasfgasgdf.yaml'

        }

    ];

    public constructor() {
    }
}
