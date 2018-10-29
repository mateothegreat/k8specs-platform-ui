import { ExecAction } from './ExecAction';
import { HTTPGetAction } from './HTTPGetAction';
import { TCPSocketAction } from './TCPSocketAction';

export class Probe {

    public exec: ExecAction;
    public failureThreshold: number = 3;
    public httpGet: HTTPGetAction;

    public initialDelaySeconds: number = 10;
    public periodSeconds: number = 10;
    public successThreshold: number = 1;

    public tcpSocket: TCPSocketAction;
    public timeoutSeconds: number = 1;

}
