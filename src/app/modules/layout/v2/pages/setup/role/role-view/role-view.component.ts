import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-role-view',
    templateUrl: './role-view.component.html',
    styleUrls: [
        './role-view.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/cards.css',
        '../../../../styles/lists.css',
        '../../../../styles/fields.css',
    ]
})
export class RoleViewComponent implements OnInit {

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    gotoList(): void {
        this.svcUI.navTo('/v2/role/list');
    }
}
