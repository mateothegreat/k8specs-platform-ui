import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSplitModule } from 'angular-split';

import { AppComponent } from './app.component';
import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
} from '@angular/material';
import { EditorComponent } from './editor/editor.component';
import { GeneratorComponent } from './generator/generator.component';
import { ControlsComponent } from './controls/controls.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormWizardComponent } from './forms/form-wizard/form-wizard.component';
import { AutofocusDirective } from './_lib/AutofocusDirective';
import { ToastrModule } from 'ngx-toastr';
import { NgProgressInterceptor, NgProgressModule } from 'ngx-progressbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({

    declarations: [

        AppComponent,

        AutofocusDirective,

        ControlsComponent,
        EditorComponent,
        GeneratorComponent,
        FormWizardComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,

        FormsModule,
        ReactiveFormsModule,


        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatTabsModule,
        MatTooltipModule,
        MatToolbarModule,
        MatTreeModule,

        AngularSplitModule,
        CodemirrorModule,
        NgProgressModule,
        ToastrModule.forRoot({

            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            enableHtml: true,
            closeButton: true

        }),

    ],

    entryComponents: [

        FormWizardComponent

    ],

    providers: [

        {

            provide: HTTP_INTERCEPTORS,
            useClass: NgProgressInterceptor,
            multi: true

        }

    ],
    bootstrap: [AppComponent]

})
export class AppModule {
}
