import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sp-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: [
        './employee-list.component.css',
        '../../../styles/pages.css',
        '../../../styles/forms.css',
        '../../../styles/cards.css'
    ]
})
export class EmployeeListComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
