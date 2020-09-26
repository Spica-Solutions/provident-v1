import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

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

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    gotoNew(): void {
        this.svcUI.navTo(`${this.pref}new`);
    }

    gotoEdit(id): void {
        this.svcUI.navTo(`${this.pref}edit`);
    }

    gotoRegister(id): void {
        this.svcUI.navTo(`${this.pref}register`);
    }

}
