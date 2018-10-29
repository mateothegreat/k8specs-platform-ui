import { Component, OnInit } from '@angular/core';
import { GeneratorService } from './generator.service';

@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

    public constructor(public generatorService: GeneratorService) {

    }

    public ngOnInit() {
    }

}
