import { LabelSelector } from './LabelSelector';

export class DeploymentSpec {

    public replicas: number = 1;
    public revisionHistoryLimit: number = 10;

    public selector: LabelSelector = new LabelSelector();

    public toJSON(): string {

        let str = '';

        str += `  selector: \n${this.selector.toJSON()}\n`;
        str += `  replicas: ${this.replicas}\n`;
        str += `  revisionHistoryLimit: ${this.revisionHistoryLimit}\n`;

        return str;

    }

}
