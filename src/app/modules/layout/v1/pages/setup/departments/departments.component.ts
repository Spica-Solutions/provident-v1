import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sp-departments',
    templateUrl: './departments.component.html',
    styleUrls: [
        './departments.component.css',
        '../../../styles/pages.css',
        '../../../styles/forms.css',
        '../../../styles/tables.css'
    ]
})
export class DepartmentsComponent implements OnInit {

    showEditForm:boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    toggleEditForm(show): void {
        this.showEditForm = show;
    }

    editDep(id): void {
        this.showEditForm = true;
    }

}
