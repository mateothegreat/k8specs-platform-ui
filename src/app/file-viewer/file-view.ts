export class FileView {

    public code: string = 'Loading...';
    public name: string;
    public tags: string[];

    public username: string;
    public email: string;
    public stampCreated: string;

    public constructor(obj: {

        code?: string,
        name?: string,
        tags?: string[],

        username?: string,
        email?: string,
        stampCreated?: string

    }) {

        this.code = obj.code;
        this.name = obj.name;
        this.tags = obj.tags;

        this.username = obj.username;
        this.email = obj.email;
        this.stampCreated = obj.stampCreated;

    }

}

