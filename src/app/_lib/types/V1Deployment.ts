import { V1DeploymentSpec, V1DeploymentStatus } from '../k8schema';
import { V1ObjectMeta } from './V1ObjectMeta';

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export class V1Deployment {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    public apiVersion: string = 'apps/v1';
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    'kind': string = 'Deployment';
    /**
     * Standard object metadata.
     */
    'metadata': V1ObjectMeta = new V1ObjectMeta();
    /**
     * Specification of the desired behavior of the Deployment.
     */
    'spec': V1DeploymentSpec = new V1DeploymentSpec();
    /**
     * Most recently observed status of the Deployment.
     */
    'status': V1DeploymentStatus = new V1DeploymentStatus();
}
