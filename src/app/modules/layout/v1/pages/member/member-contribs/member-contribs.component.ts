import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-member-contribs',
    templateUrl: './member-contribs.component.html',
    styleUrls: [
        './member-contribs.component.css',
        '../../../styles/subtabs.css',
        '../../../styles/forms.css',
        '../../../styles/tables.css',
    ]
})
export class MemberContribsComponent implements OnInit {

    constructor(
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
    }

}
