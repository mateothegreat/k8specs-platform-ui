import { Metadata } from './Metadata';
import { DeploymentSpec } from './DeploymentSpec';

export class Deployment {

    public readonly apiVersion: string = 'apps/v1';
    public readonly kind: string = 'Deployment';

    public metadata: Metadata = new Metadata();

    public spec: DeploymentSpec = new DeploymentSpec();

    public toJSON(): string {

        return `apiVersion: ${this.apiVersion}
kind: ${this.kind}
metadata:
${this.metadata.toJSON()}
spec:
${this.spec.toJSON()}
`;

    }

}
