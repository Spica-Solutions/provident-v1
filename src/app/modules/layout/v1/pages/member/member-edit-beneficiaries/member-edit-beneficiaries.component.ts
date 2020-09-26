import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sp-member-edit-beneficiaries',
    templateUrl: './member-edit-beneficiaries.component.html',
    styleUrls: [
        './member-edit-beneficiaries.component.css',
        '../../../styles/subtabs.css',
        '../../../styles/forms.css',
        '../../../styles/tables.css',
    ]
})
export class MemberEditBeneficiariesComponent implements OnInit {

    showBenForm = false;

    constructor() { }

    ngOnInit(): void {
    }

    toggleBenForm(show): void {
        this.showBenForm = show;
    }

}
