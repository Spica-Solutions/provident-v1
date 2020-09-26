import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-member-edit-form',
    templateUrl: './member-edit-form.component.html',
    styleUrls: [
        './member-edit-form.component.css',
        '../../../styles/pages.css',
        '../../../styles/cards.css',
        '../../../styles/forms.css'
    ]
})
export class MemberEditFormComponent implements OnInit {

    showChangePwd = false;

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    showChangePassword(show): void {
        this.showChangePwd = show;
    }

    gotoList(): void {
        if (confirm('You may lose any unsaved changes. Continue?')) {
            this.svcUI.navTo('/v1/member/list');
        }
    }

}
