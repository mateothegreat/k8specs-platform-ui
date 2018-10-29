export class LabelSelector {

    public matchLabels: { [key: string]: string } = {};

    public toJSON(): string {

        let build = [];

        const keys = Object.keys(this.matchLabels);
        for (let i = 0; i < keys.length; i++) {

            build.push(`      ${keys[i]}: "${this.matchLabels[keys[i]]}"`);

        }

        return `    matchLabels:\n${build.join('\n')}`;

    }

}
