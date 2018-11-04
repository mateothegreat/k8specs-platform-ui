import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { ControlsComponent } from './controls/controls.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormWizardComponent } from './forms/form-wizard/form-wizard.component';
import { AutofocusDirective } from './_lib/AutofocusDirective';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostTabLabelComponent } from './post/post-tab-label/post-tab-label.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './_lib/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { PostService } from './post/post.service';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { SharedModule } from './shared/shared.module';
import { ValidatorComponent } from './validator/validator.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContactComponent } from './contact/contact.component';
import { CustomRouteReuseStrategy } from './_lib/CustomRouteReuseStrategy';
import { TeximateModule } from 'ngx-teximate';
import { JwtInterceptor } from './_lib/JwtInterceptor';
import { HttpErrorInterceptor } from './_lib/HttpErrorInterceptor';
import { ValidatorPostComponent } from './validator/validator-post/validator-post.component';
import { PostsComponent } from './posts/posts.component';
import { PostCardComponent } from './posts/post-card/post-card.component';
import { GravatarModule } from 'ngx-gravatar';
import { ClipboardModule } from 'ngx-clipboard';
import { UsersComponent } from './users/users.component';
import { UsersProfileComponent } from './users/users-profile/users-profile.component';
import { PostViewComponent } from './posts/post-view/post-view.component';
import { UsersPostComponent } from './users/users-post/users-post.component';
import { PrismModule } from '@sgbj/angular-prism';

import 'prismjs/prism';
import 'prismjs/components/prism-yaml';
import { FileViewerModule } from './file-viewer/file-viewer.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DisqusModule } from 'ngx-disqus';
// import 'prismjs/components/prism-scss';
// import 'prismjs/components/prism-markup';

export function onLoadFn() {

    monaco.languages.registerCompletionItemProvider('yaml', {

        provideCompletionItems: () => {

            return [

                {

                    label: 'simpleText',
                    kind: monaco.languages.CompletionItemKind.Text

                }, {

                    label: 'apiVersion',
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: { value: 'apiVersion: ${1:apps/v1}' }

                }, {

                    label: 'metadata',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                        value: [
                            'metadata:',
                            '\tname: ${1:thename}',
                            '\t$0'
                        ].join('\n')
                    },
                    documentation: 'object metadata'

                }
            ];

        }

    });

}

const monacoConfig: NgxMonacoEditorConfig = {

    defaultOptions: {

        theme: 'vs-dark',
        language: 'yaml',
        cursorBlinking: 'phase',
        minimap: {
            enabled: false
        },
        autoIndent: true

    },

    onMonacoLoad: onLoadFn
};

@NgModule({

    declarations: [

        AppComponent,

        AutofocusDirective,

        ControlsComponent,
        EditorComponent,
        FormWizardComponent,
        PostComponent,
        HomeComponent,
        PostTabLabelComponent,
        HeaderComponent,
        CallbackComponent,
        FooterComponent,
        ValidatorComponent,
        SidenavComponent,
        ContactComponent,
        ValidatorPostComponent,
        PostsComponent,
        PostCardComponent,
        UsersComponent,
        UsersProfileComponent,
        PostViewComponent,
        UsersPostComponent,
        BreadcrumbsComponent,

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,

        RouterModule.forRoot([

            {

                path: 'home',
                component: HomeComponent

            }, {

                path: 'contact',
                component: ContactComponent

            }, {

                path: 'validator',
                component: ValidatorComponent

            }, {

                path: 'callback',
                component: CallbackComponent

            }, {

                path: 'authorize',
                component: CallbackComponent

            }, {

                path: 'oauth/callback',
                component: CallbackComponent

            }, {

                path: 'users/:displayName/:postName',
                component: UsersPostComponent

            }, {

                path: 'users/:displayName',
                component: UsersProfileComponent

            }, {

                path: '',
                pathMatch: 'full',
                redirectTo: 'home'

            }

        ], { enableTracing: false }),

        DisqusModule.forRoot('k8specs'),
        FileViewerModule,
        LoginModule,
        SharedModule,

        ClipboardModule,
        GravatarModule,
        // AngularSplitModule,
        MonacoEditorModule.forRoot(monacoConfig),
        NgProgressModule,
        NgProgressHttpModule.forRoot(),
        PrismModule,
        TeximateModule,
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
        PostComponent,
        ValidatorComponent,
        ValidatorPostComponent,

    ],

    providers: [


        // {
        //
        //     provide: COMPLETION_PROVIDERS,
        //     useClass: KubernetesCompletionService,
        //     multi: true
        //
        // },

        { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
        {

            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,

        }, {

            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true,

        },
        AuthService,
        LoginService,
        PostService,

    ],

    bootstrap: [AppComponent]

})
export class AppModule {
}
