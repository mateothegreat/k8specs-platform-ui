import { EnvVar } from './EnvVar';
import { ImagePullPolicy } from './ImagePullPolicy';
import { Probe } from './Probe';
import { ContainerPort } from './ContainerPort';
import { VolumeMount } from './VolumeMount';

export class Container {

    public name: string;

    public args: Array<string> = [];
    public command: Array<string> = [];
    public env: Array<EnvVar> = [];

    public image: string;
    public imagePullPolicy: ImagePullPolicy = ImagePullPolicy.IfNotPresent;

    public livenessProbe: Probe;
    public readinessProbe: Probe;

    public ports: Array<ContainerPort> = [];

    public volumeMounts: Array<VolumeMount> = [];

}
