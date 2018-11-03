import { Component, Input } from '@angular/core';
import { FileView } from './file-view';

@Component({
    selector: 'app-file-viewer',
    templateUrl: './file-viewer.component.html',
    styleUrls: ['./file-viewer.component.scss']
})
export class FileViewerComponent {

    @Input() public file: FileView;

    public constructor() {

    }

}
