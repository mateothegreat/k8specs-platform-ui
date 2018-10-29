export class Metadata {

    public namespace: string;
    public name: string;
    public annotations: { [key: string]: string } = {};
    public labels: { [key: string]: string } = {};

    public toJSON(): string {

        let str = '';

        if (this.namespace) str += `  namespace: ${this.namespace}\n`;
        if (this.name) str += `  name: ${this.name}`;

        if (this.labels) {

            let build = [];

            const keys = Object.keys(this.labels);

            if (keys.length > 0) {

                for (let i = 0; i < keys.length; i++) {

                    build.push(`        ${keys[i]}: "${this.labels[keys[i]]}"`);

                }

                str += `      labels:\n${build.join('\n')}`;

            }

        }

        return str;

    }

}
