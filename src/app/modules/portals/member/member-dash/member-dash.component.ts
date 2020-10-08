import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sp-member-dash',
    templateUrl: './member-dash.component.html',
    styleUrls: [
        './member-dash.component.css',
        '../../../layout/v1/styles/pages.css',
        '../../../layout/v1/styles/cards.css',
        '../../../layout/v1/styles/tables.css',
        '../../../layout/v1/styles/forms.css',
        '../../../layout/v1/styles/fields.css',
    ]
})
export class MemberDashComponent implements OnInit {

    membername: string = "";

    constructor() { }

    ngOnInit(): void {
        this.membername = "Villarama, Violeta";
    }

}
