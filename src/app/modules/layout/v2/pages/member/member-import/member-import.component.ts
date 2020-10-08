import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-member-import',
    templateUrl: './member-import.component.html',
    styleUrls: [
        './member-import.component.css',
        '../../../styles/pages.css',
        '../../../styles/cards.css',
        '../../../styles/lists.css',
        '../../../styles/fields.css'
    ]
})
export class MemberImportComponent implements OnInit {

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

    gotoList(): void {
        this.svcUI.navTo('/v2/member/list');
    }

    gotoHistory(): void {

    }

    uploadFile(): void {
        
    }

}
