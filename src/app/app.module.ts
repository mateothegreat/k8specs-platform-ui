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
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostTabLabelComponent } from './post/post-tab-label/post-tab-label.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './_lib/auth.service';

@NgModule({

    declarations: [

        AppComponent,

        AutofocusDirective,

        ControlsComponent,
        EditorComponent,
        GeneratorComponent,
        FormWizardComponent,
        PostComponent,
        HomeComponent,
        PostTabLabelComponent,
        HeaderComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,

        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([

            {

                path: 'home/:tab',
                component: HomeComponent

            }

        ]),


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

        FormWizardComponent,
        PostComponent

    ],

    providers: [

        {

            provide: HTTP_INTERCEPTORS,
            useClass: NgProgressInterceptor,
            multi: true

        },

        AuthService,

    ],
    bootstrap: [AppComponent]

})
export class AppModule {
}
