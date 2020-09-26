import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-account-form',
    templateUrl: './account-form.component.html',
    styleUrls: [
        './account-form.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/cards.css',
        '../../../../styles/forms.css',
        '../../../../styles/fields.css',
        '../../../../styles/tables.css',
    ]
})
export class AccountFormComponent implements OnInit {

    pref: string = '/v1/setup/account';
    
    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    gotoList(): void {
        this.svcUI.navTo(this.pref);
    }

}
