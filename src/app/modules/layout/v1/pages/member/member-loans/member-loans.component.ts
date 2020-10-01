import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-member-loans',
    templateUrl: './member-loans.component.html',
    styleUrls: [
        './member-loans.component.css',
        '../../../styles/subtabs.css',
        '../../../styles/forms.css',
        '../../../styles/tables.css',
    ]
})
export class MemberLoansComponent implements OnInit {

    pref: string = '/v1/transaction/loan';
    isTouched: boolean = false;
    subUI: Subscription;

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    gotoNewLoan(mem): void {
        this.svcUI.navTo(`${this.pref}/new`, { mem: mem });
    }

    gotoLoan(id): void {
        this.svcUI.navTo(`${this.pref}/edit`, { id: id });
    }

}
