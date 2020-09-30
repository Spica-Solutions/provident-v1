import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpApiService } from 'src/app/modules/services/sp-api.service';
import { SpMetadataService } from 'src/app/modules/services/sp-metadata.service';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-member-edit-beneficiaries',
    templateUrl: './member-edit-beneficiaries.component.html',
    styleUrls: [
        './member-edit-beneficiaries.component.css',
        '../../../styles/subtabs.css',
        '../../../styles/forms.css',
        '../../../styles/tables.css',
    ]
})
export class MemberEditBeneficiariesComponent implements OnInit {

    showBenForm = false;

    rid: string;
    paramsSub: Subscription;
    rtype: string;
    urlSub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private svcApi: SpApiService,
        private svcMeta: SpMetadataService,
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
        console.log('Edit-Benefs: onInit()');
        this.parseRouteData();

        this.svcUI.changeActiveTab(this.rtype);
    }

    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
        this.urlSub.unsubscribe();
    }

    toggleBenForm(show): void {
        this.showBenForm = show;
    }

    parseRouteData(): void {
        this.paramsSub = this.route.queryParams.subscribe(p => {
            this.rid = p['id'] || '';
            if (this.rid) {
                this.rid = this.rid.trim();
            }
            console.log(`rid: '${this.rid}'`);
        });
        this.urlSub = this.route.parent.url.subscribe(u => {
            console.log({ u });
            this.rtype = u[u.length - 1].path;
            console.log(`rtype: ${this.rtype}`);
        });
        console.log({ rid: this.rid, rtype: this.rtype });
    }

}
