import { Component, OnInit } from '@angular/core';
import { SpApiService } from 'src/app/modules/services/sp-api.service';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: [
        './member-list.component.css',
        '../../../styles/pages.css',
        '../../../styles/cards.css',
        '../../../styles/lists.css',
        '../../../styles/fields.css',
    ]
})
export class MemberListComponent implements OnInit {

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    viewRec(id): void {
        this.svcUI.navTo('/v2/member/view', { id: id });
    }

}
