import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: [
        './user-list.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/cards.css',
        '../../../../styles/lists.css',
        '../../../../styles/fields.css',
    ]
})
export class UserListComponent implements OnInit {

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    gotoList(): void {
        this.svcUI.navTo('/v2/user/list');
    }
    
    viewRec(id): void {
        this.svcUI.navTo('/v2/user/view', { id: id });
    }

}
