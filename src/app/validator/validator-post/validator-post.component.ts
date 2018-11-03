import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorPostService } from './validator-post.service';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from '../../_lib/dialog.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { distinct, map, startWith } from 'rxjs/operators';
import { onlyUnique } from '../../_lib/Utils';

@Component({
    selector: 'app-validator-post',
    templateUrl: './validator-post.component.html',
    styleUrls: ['./validator-post.component.scss']
})
export class ValidatorPostComponent {

    @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    public formGroup = new FormGroup({

        name: new FormControl('asdf', [

            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(32),
            //Validators.pattern('^[a-zA-Z0-9._- ]+$')

        ]),

        description: new FormControl(''),

        visibility: new FormControl(true)

    });

    public tags: string[] = ['nginx', 'nginx', 'redis'];

    public tagsControl = new FormControl();
    public tagsFiltered: Observable<string[]>;
    public separatorKeysCodes: number[] = [ENTER, COMMA];


    public constructor(private validatorPostService: ValidatorPostService,
                       private toastrService: ToastrService,
                       private dialogService: DialogService) {

        this.tagsFiltered = this.tagsControl.valueChanges.pipe(
            startWith(null),
            distinct(),
            map((tag: string | null) => tag ? this._filter(tag) : this.tags.slice().filter(onlyUnique))
        );

    }

    public add(event: MatChipInputEvent): void {

        if (!this.matAutocomplete.isOpen) {

            const input = event.input;
            const value = event.value;

            // Add our tag
            if ((value || '').trim()) {

                if (this.tags.indexOf(value) === -1) {

                    this.tags.push(value.trim());

                }

            }

            // Reset the input value
            if (input) {

                input.value = '';

            }

            this.tagsControl.setValue(null);

        }

    }

    public remove(fruit: string): void {

        const index = this.tags.indexOf(fruit);

        if (index >= 0) {

            this.tags.splice(index, 1);

        }

    }

    public selected(event: MatAutocompleteSelectedEvent): void {

        if (this.tags.indexOf(event.option.viewValue) === -1) {

            this.tags.push(event.option.viewValue);

        }

        this.fruitInput.nativeElement.value = '';

        this.tagsControl.setValue(null);

    }

    private _filter(value: string): string[] {

        const filterValue = value.toLowerCase();

        return this.tags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0).filter(onlyUnique);

    }


    public post(): void {

        const value = this.formGroup.value;

        value.tags = this.tags.filter(onlyUnique);

        console.log(value);

        this.validatorPostService.post(value).subscribe((result: any) => {

            if (result) {

                this.toastrService.success('Your spec has been posted!');

                this.dialogService.close();

            }

        });

    }

}
