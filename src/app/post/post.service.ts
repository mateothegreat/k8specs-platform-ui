import { Injectable } from '@angular/core';
import { DialogService } from '../_lib/dialog.service';
import { PostComponent } from './post.component';
import { MonacoFile } from 'ngx-monaco';

export class Tab {

    public index: number;
    public label: string;
    public autoFocus: boolean = true;

    public constructor(index: number, label?: string, autoFocus?: boolean) {

        this.index = index;
        this.label = label || null;
        this.autoFocus = !!autoFocus;

    }

}

@Injectable({
    providedIn: 'root'
})
export class PostService {

    public tabs: Array<Tab> = [];
    public files: MonacoFile[] = [];

    public constructor(private dialogService: DialogService) {

        this.tabAdd(new Tab(0, 'new-file.yaml'));
        // this.tabAdd(new Tab(0, 'deployment.yaml'));
        // this.tabAdd(new Tab(0, 'service.yaml'));

    }

    public open(): void {

        this.dialogService.open<PostComponent>(PostComponent, {

            width: '90%',
            height: '90%'

        });

    }

    public tabHasEmptyLast: boolean;

    public tabUpdateLabelByIndex(index: number, label: string) {

        this.tabs[index].label = label;

        if (label.length > 0 && !this.tabHasEmptyLast) {

            this.tabAdd(new Tab(this.tabs.length, null, false));

            this.tabHasEmptyLast = true;

        }

    }

    public tabAdd(tab: Tab): void {

        this.tabs.push(tab);

        this.files.push({

            uri: tab.label,
            language: 'yaml',
            content: 'content: ' + tab.label

        });

    }

    public tabRemoveByLabel(label: string): void {

        let newTabs = [];

        for (let tab in this.tabs) {

            if (this.tabs[tab].label != label) {

                newTabs.push(this.tabs[tab]);

            }

        }

        this.tabs = newTabs;

    }

}
