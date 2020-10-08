import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-member-view',
    templateUrl: './member-view.component.html',
    styleUrls: [
        './member-view.component.css',
        '../../../styles/pages.css',
        '../../../styles/cards.css',
        '../../../styles/lists.css',
        '../../../styles/fields.css',
    ]
})
export class MemberViewComponent implements OnInit {

    edit_empinfo: boolean = false;
    edit_contact: boolean = false;

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    gotoList(): void {
        this.svcUI.navTo('/v2/member/list');
    }

    showEditEmpInfo(show): void {
        this.edit_empinfo = show;
    }

    showContactInfo(show): void {
        this.edit_contact = show;
    }

    gotoLoan(id): void {
        this.svcUI.navTo('/v2/loan/view', { id: id });
    }

}
