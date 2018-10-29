import { HTTPHeader } from './HTTPHeader';

export class HTTPGetAction {

    public host: string;

    public httpHeaders: Array<HTTPHeader> = [];
    public path: string = '/';
    public port: string | number = 80;

    // TODO:  add enum
    public scheme: string = 'http';

}
