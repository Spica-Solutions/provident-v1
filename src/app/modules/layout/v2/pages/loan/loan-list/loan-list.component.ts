import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-loan-list',
    templateUrl: './loan-list.component.html',
    styleUrls: [
        './loan-list.component.css',
        '../../../styles/pages.css',
        '../../../styles/cards.css',
        '../../../styles/lists.css',
        '../../../styles/fields.css',
    ]
})
export class LoanListComponent implements OnInit {

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    viewRec(id): void {
        this.svcUI.navTo('/v2/loan/view', { id: id });
    }

}
