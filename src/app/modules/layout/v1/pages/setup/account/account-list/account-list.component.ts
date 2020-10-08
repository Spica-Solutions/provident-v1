import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpApiService } from 'src/app/modules/services/sp-api.service';
import { SpMetadataService } from 'src/app/modules/services/sp-metadata.service';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'sp-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: [
        './account-list.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/forms.css',
        '../../../../styles/tables.css'
    ]
})
export class AccountListComponent implements OnInit {

    pref: string = '/v1/setup/account/';
    accounts = [];
    subAccounts: Subscription;

    constructor(
        private acRoute: ActivatedRoute,
        private svcApi: SpApiService,
        private svcMeta: SpMetadataService,
        private svcUI: SpUiService
    ) {
    }

    ngOnInit(): void {
        this.subAccounts = this.acRoute.data.pipe(map((res) => {
            return res.list;
        })).subscribe((data) => {
            console.log(data);
            this.accounts = data;
        });
    }

    gotoNew(): void {
        this.svcUI.navTo(`${this.pref}new`);
    }

    gotoEdit(id): void {
        this.svcUI.navTo(`${this.pref}edit`, { id: id});
    }

    gotoRegister(id): void {
        this.svcUI.navTo(`${this.pref}register`);
    }

}
