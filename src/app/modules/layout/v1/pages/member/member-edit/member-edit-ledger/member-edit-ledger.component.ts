import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-member-edit-ledger',
    templateUrl: './member-edit-ledger.component.html',
    styleUrls: [
        './member-edit-ledger.component.css',
        '../../../../styles/subtabs.css',
        '../../../../styles/forms.css',
      ]
})
export class MemberEditLedgerComponent implements OnInit {

    ui = null;

    constructor(
        private svcUI: SpUiService
    ) {
    }

    ngOnInit(): void {
    }

    newLoan(id): void {
        this.svcUI.navTo('/v1/transaction/loan/new', { mem: id });
    }

}
