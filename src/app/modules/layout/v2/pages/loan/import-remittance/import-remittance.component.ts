import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-import-remittance',
    templateUrl: './import-remittance.component.html',
    styleUrls: [
        './import-remittance.component.css',
        '../../../styles/pages.css',
        '../../../styles/cards.css',
        '../../../styles/lists.css',
        '../../../styles/fields.css'
    ]
})
export class ImportRemittanceComponent implements OnInit {

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    gotoList(): void {
        this.svcUI.navTo('/v2/loan/list');
    }

    gotoHistory(): void {

    }

    expand(id): void {
        
    }
}
