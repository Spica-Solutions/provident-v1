import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sp-generate-billing-statement',
    templateUrl: './generate-billing-statement.component.html',
    styleUrls: [
        './generate-billing-statement.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/cards.css',
        '../../../../styles/forms.css',
        '../../../../styles/tables.css',
    ]
})
export class GenerateBillingStatementComponent implements OnInit {

    showStatement: boolean = false;
    showAllDetail: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    generate(): void {
        this.showStatement = true;
    }

    showDetail(show): void {
        this.showAllDetail = show;
    }

}
