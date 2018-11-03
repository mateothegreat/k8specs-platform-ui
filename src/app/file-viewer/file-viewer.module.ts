import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileViewerComponent } from './file-viewer.component';
import { PrismModule } from '@sgbj/angular-prism';
import { SharedModule } from '../shared/shared.module';
import { GravatarModule } from 'ngx-gravatar';
import { RouterModule } from '@angular/router';

@NgModule({

    imports: [

        CommonModule,
        RouterModule,

        GravatarModule,
        PrismModule,

        SharedModule,

    ],

    exports: [

        FileViewerComponent,

    ],

    declarations: [

        FileViewerComponent

    ]

})
export class FileViewerModule {
}
