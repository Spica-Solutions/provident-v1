import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: [
        './user-view.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/cards.css',
        '../../../../styles/lists.css',
        '../../../../styles/fields.css',
    ]
})
export class UserViewComponent implements OnInit {

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    gotoList(): void {
        this.svcUI.navTo('/v2/user/list');
    }

    submitForm(): void {
        
    }

}
