import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sp-locations',
    templateUrl: './locations.component.html',
    styleUrls: [
        './locations.component.css',
        '../../../styles/pages.css',
        '../../../styles/forms.css',
        '../../../styles/tables.css'
    ]
})
export class LocationsComponent implements OnInit {

    showEditForm:boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    toggleEditForm(show): void {
        this.showEditForm = show;
    }

    editLoc(id): void {
        this.showEditForm = true;
    }

}
