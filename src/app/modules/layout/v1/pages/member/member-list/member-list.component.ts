import { Component, OnInit } from '@angular/core';
import { SpUiService } from '../../../../../services/sp-ui.service';
import { SpApiService } from '../../../../../services/sp-api.service';
import { SpMetadataService } from 'src/app/modules/services/sp-metadata.service';
import { Subscription } from 'rxjs';

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

    members = [];
    subMembers: Subscription;

    fetchDone = true;
    subFetchDone: Subscription;

    constructor(
        private svcApi: SpApiService,
        private svcMeta: SpMetadataService,
        private svcUI: SpUiService
    ) {
    }

    ngOnInit(): void {
        this.svcApi.find('members', true);
        
        this.subFetchDone = this.svcApi.onFetchDoneChange().subscribe(d => {
            console.log('subFetchDone');
            console.log(d);
            this.fetchDone = d;
        })
        
        this.subMembers = this.svcMeta.onSearchResultsChange().subscribe(d => {
            if (d) {
                console.log('Retrieving member list from meta...');
                this.members = d;
            }
        })
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
