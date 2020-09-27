import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-loan-approve',
    templateUrl: './loan-approve.component.html',
    styleUrls: [
        './loan-approve.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/forms.css',
        '../../../../styles/tables.css'
    ]
})
export class LoanApproveComponent implements OnInit {

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    gotoLoan(id): void {
        this.svcUI.navTo('/v1/transaction/loan/edit', {id: id});
    }

    approve(id, appr): void {

    }

}
