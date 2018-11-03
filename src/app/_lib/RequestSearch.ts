export class RequestSearch {

    public terms: string;

    public sort: string = 'stampCreated';
    public direction: string = 'DESC';

    public count: number = 10;
    public pageSize: number = 10;
    public limit: number = 10;

    public page: number = 1;

    public constructor(obj: {

        terms?: string,
        sort?: string,
        direction?: string,
        count?: number,
        pageSize?: number,
        limit?: number,
        page?: number,

    }) {

        this.terms = obj.terms || '';
        this.direction = obj.direction || 'DESC';
        this.count = obj.count || 10;
        this.pageSize = obj.pageSize || 10;
        this.limit = obj.limit || 10;
        this.page = obj.page || 1;

    }

}
