import { Metadata } from './Metadata';
import { PodSpec } from './PodSpec';

export class PodTemplateSpec {

    public metadata: Metadata = new Metadata();

    public spec: PodSpec;

}
