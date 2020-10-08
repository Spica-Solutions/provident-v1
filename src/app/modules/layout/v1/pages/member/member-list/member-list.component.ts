import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpUiService } from '../../../../../services/sp-ui.service';
import { SpApiService } from '../../../../../services/sp-api.service';
import { SpMetadataService } from 'src/app/modules/services/sp-metadata.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'sp-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: [
        './member-list.component.css',
        '../../../styles/pages.css',
        '../../../styles/forms.css',
        '../../../styles/fields.css',
        '../../../styles/tables.css'
    ]
})
export class MemberListComponent implements OnInit {

    submitting: boolean = false;
    members = [];
    subMembers: Subscription;

    // fetchDone = true;
    // subFetchDone: Subscription;

    constructor(
        private acRoute: ActivatedRoute,
        private svcApi: SpApiService,
        private svcMeta: SpMetadataService,
        private svcUI: SpUiService
    ) {
    }

    ngOnInit(): void {
        this.subMembers = this.acRoute.data.pipe(map((res) => {
            return res.list;
        })).subscribe((data) => {
            console.log(data);
            this.members = data;
        });
    }

    ngOnDestroy(): void {
        this.subMembers.unsubscribe();
    }

    showEditEmp(id): void {
        this.svcUI.navTo('/v1/member/edit', { id: id});
    }

    gotoNew(): void {
        this.svcUI.navTo('/v1/member/new');
    }

}
