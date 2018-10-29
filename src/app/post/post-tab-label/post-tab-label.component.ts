import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-post-tab-label',
    templateUrl: './post-tab-label.component.html',
    styleUrls: ['./post-tab-label.component.scss']
})
export class PostTabLabelComponent {

    public;
    @Input() label: string;

}
