import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-loan-view',
    templateUrl: './loan-view.component.html',
    styleUrls: [
        './loan-view.component.css',
        '../../../styles/pages.css',
        '../../../styles/cards.css',
        '../../../styles/lists.css',
        '../../../styles/fields.css',
    ]
})
export class LoanViewComponent implements OnInit {

    showPreview: boolean = false;
    
    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    gotoList(): void {
        this.svcUI.navTo('/v2/loan/list');
    }

    gotoMember(): void {
        this.svcUI.navTo('/v2/member/view');
    }

    preview(): void {
        this.showPreview = true;
    }

    submitLoan(): void {

    }

}
