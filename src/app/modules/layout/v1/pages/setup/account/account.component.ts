import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-account',
    templateUrl: './account.component.html',
    styleUrls: [
        './account.component.css',
        '../../../styles/pages.css',
        '../../../styles/forms.css',
        '../../../styles/tables.css'
    ]
})
export class AccountComponent implements OnInit {

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
        this.svcUI.navTo(`${this.pref}edit`, {id: id});
    }

    gotoRegister(id): void {
        this.svcUI.navTo(`${this.pref}register`, {id: id});
    }

}
