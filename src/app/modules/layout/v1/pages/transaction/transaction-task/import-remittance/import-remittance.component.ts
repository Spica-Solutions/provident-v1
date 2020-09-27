import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sp-import-remittance',
    templateUrl: './import-remittance.component.html',
    styleUrls: [
        './import-remittance.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/cards.css',
        '../../../../styles/forms.css',
        '../../../../styles/tables.css',
    ]
})
export class ImportRemittanceComponent implements OnInit {

    showResults = false;
    showAllDetail = false;

    constructor() { }

    ngOnInit(): void {
    }

    generate(): void {
        this.showResults = true;
    }

    showDetail(show): void {
        this.showAllDetail = show;
    }

}
