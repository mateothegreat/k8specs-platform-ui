import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({

    imports: [

        CommonModule,

        ReactiveFormsModule,

        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatSidenavModule,
        MatTabsModule,
        MatTooltipModule,
        MatToolbarModule,

    ],

    exports: [

        ReactiveFormsModule,

        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,
        MatStepperModule,
        MatTabsModule,
        MatTooltipModule,
        MatToolbarModule,

    ],

    declarations: []

})
export class SharedModule {
}
