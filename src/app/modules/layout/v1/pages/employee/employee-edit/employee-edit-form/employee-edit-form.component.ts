import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sp-employee-edit-form',
    templateUrl: './employee-edit-form.component.html',
    styleUrls: [
        './employee-edit-form.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/cards.css',
        '../../../../styles/forms.css'
    ]
})
export class EmployeeEditFormComponent implements OnInit {

    showChangePwd = false;

    constructor() { }

    ngOnInit(): void {
    }

    showChangePassword(show): void {
        this.showChangePwd = show;
    }

}
