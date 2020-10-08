import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_a } from '@angular/platform-browser';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
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
        '../../../styles/fields.css'
    ]
})
export class MemberEditBeneficiariesComponent implements OnInit {

    showBenForm = false;

    rid: string;
    // paramsSub: Subscription;
    rtype: string;
    // urlSub: Subscription;
    subRec: Subscription;

    benefs: object[];
    rec: object;
    benForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router,
        private svcApi: SpApiService,
        private svcMeta: SpMetadataService,
        private svcUI: SpUiService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        console.log('Edit-Benefs: onInit()');
        
        this.subRec = this.route.data.pipe(map((res) => {
            return res.rec;
        })).subscribe((rec) => {
            console.log(rec);
            this.rec = rec;
            // this.membername = `Member #${rec.empid} - ${rec.lastname}, ${rec.firstname}`;
            // this.initFormValues();
            
            this.svcMeta.setActiveRecord(this.rec);
        });
        
        this.svcUI.parseRouteData(this.route);

        this.rec = this.svcMeta.activeRecord;
        this.benefs = [];
        this.initForm();
        
        if (this.rec['beneficiaries']) {
            var bcount = 0;
            this.rec['beneficiaries'].map((x) => {
                const dt = new Date(x.dob);
                const bid = x.id ? x.id : ++bcount;
                this.benefs.push({
                    id: bid,
                    name: `${x.lastname}, ${x.firstname}`,
                    dob: `${this.svcMeta.months[dt.getMonth()]['shortname']} ${dt.getDate()}, ${dt.getFullYear()}`,
                    rel: x.relationship
                });
            });
        }
        console.log(this.benefs);

        this.svcUI.changeActiveTab(this.rtype);
    }

    ngOnDestroy(): void {
        this.subRec.unsubscribe();
        // this.urlSub.unsubscribe();
    }

    initForm(): void {
        console.log('initForm();');
        this.benForm = this.fb.group({
            firstname: new FormControl(""),
            lastname: new FormControl(""),
            dob: new FormControl("")
        });
    }

    popForm(obj?): void {
        console.log('popForm();');
        console.log({ obj });
        this.benForm.setValue({
            firstname: obj ? obj['firstname'] || "" : "",
            lastname: obj ? obj['lastname'] || "" : "",
            dob: obj ? this.svcUI.formatDate(obj['dob']) || "" : ""
        });
    }

    editBen(id?: string): void {
        if (id) {
            const barr = this.benefs.filter((x) => {
                return x['id'] == id;
            });
            if (barr.length > 0) {
                const b = barr[0];
                this.popForm(b);
            }
        }
        this.toggleBenForm(true);
    }

    // IN PROGRESS
    createBen(): void {
        const rid = this.rec["_id"];

    }

    cancelForm(): void {
        this.popForm();
        this.toggleBenForm(false);
    }

    toggleBenForm(show): void {
        this.showBenForm = show;
    }

    // parseRouteData(): void {
    //     this.paramsSub = this.route.queryParams.subscribe(p => {
    //         this.rid = p['id'] || '';
    //         if (this.rid) {
    //             this.rid = this.rid.trim();
    //         }
    //         console.log(`rid: '${this.rid}'`);
    //     });
    //     this.urlSub = this.route.parent.url.subscribe(u => {
    //         console.log({ u });
    //         this.rtype = u[u.length - 1].path;
    //         console.log(`rtype: ${this.rtype}`);
    //     });
    //     console.log({ rid: this.rid, rtype: this.rtype });
    // }

}
