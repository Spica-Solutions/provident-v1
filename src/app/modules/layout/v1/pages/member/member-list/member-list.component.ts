import { Component, OnInit } from '@angular/core';
import { SpUiService } from '../../../../../services/sp-ui.service';

@Component({
    selector: 'sp-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: [
        './member-list.component.css',
        '../../../styles/pages.css',
        '../../../styles/forms.css',
        '../../../styles/tables.css'
    ]
})
export class MemberListComponent implements OnInit {

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    showEditEmp(id): void {
        this.svcUI.navTo('/v1/member/edit', { id: id});
    }

    gotoNew(): void {
        this.svcUI.navTo('/v1/member/new');
    }

}
