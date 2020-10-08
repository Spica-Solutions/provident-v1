import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpApiService } from 'src/app/modules/services/sp-api.service';
import { SpMetadataService } from 'src/app/modules/services/sp-metadata.service';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-account-form',
    templateUrl: './account-form.component.html',
    styleUrls: [
        './account-form.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/cards.css',
        '../../../../styles/forms.css',
        '../../../../styles/fields.css',
        '../../../../styles/tables.css',
    ]
})
export class AccountFormComponent implements OnInit {

    pref: string = '/v1/setup/account/';
    globalData: object;
    globalLists: object;
    editForm: FormGroup;
    rec: any;
    rtype: string;
    rid: string;
    submitting: boolean = false;
    subUpdate: Subscription;
    subRec: Subscription;
    submitBtnText: string = "";
    // urlSub:Subscription;
    accTypes: object[] = [];
    accSubTypes: object[] = [];

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
        console.log('Member Edit Form: onInit()');

        this.globalData = this.svcMeta.globalData;
        this.globalLists = this.svcMeta.getGlobalLists();
        // console.log(this.globalData);
        console.log(this.globalLists);

        this.initForm();

        this.subRec = this.route.data.pipe(map((res) => {
            return res.rec;
        })).subscribe((rec) => {
            console.log('rec', rec);
            this.rec = rec;
            // this = `Member #${rec.empid} - ${rec.lastname}, ${rec.firstname}`;
            // this.initFormValues();
            
            this.svcMeta.setActiveRecord(this.rec);
        });

        // this.rec = this.svcMeta.activeRecord;
        console.log(this.rec);

        this.svcUI.parseRouteData(this.route);
        this.rid = this.svcUI.recordId;
        this.rtype = this.svcUI.recordType;

        this.submitBtnText = this.rtype == 'new' ? 'Create Account' : 'Submit Changes';
        console.log(`submitBtnText = '${this.submitBtnText}', submitting = ${this.submitting}`);

        this.accTypes = this.getTypes();

        if (this.rtype != 'new') {
            // this.svcUI.changeActiveTab(this.rtype);
            this.initFormValues();
        }
    }

    getTypes(parent?: string): object[] {
        let arr = [];

        if (!parent) {
            arr = this.globalLists['account_group'].filter(x => {
                return x.parent == null || x.parent == undefined || x.parent == '';
            });
        }
        else {
            arr = this.globalLists['account_group'].filter(x => {
                return x.parent == parent;
            });
        }
        return arr;
    }

    ngOnDestroy(): void {
        this.svcUI.destroyRouteSubs();
    }

    initForm() {
        console.log('initForm();');
        this.editForm = this.fb.group({
            code: new FormControl(""),
            name: new FormControl(""),
            type: new FormControl(""),
            subtype: new FormControl("")
        });
    }

    initFormValues(): void {
        console.log('initFormValues');
        console.log(this.rec);
        this.editForm.setValue({
            code: this.rec['code'] || "",
            name: this.rec['name'] || "",
            type: this.rec['type'] || "",
            subtype: this.rec['subtype'] || ""
        });
    }
    gotoList(): void {
        if (confirm('You may lose any unsaved changes. Continue?')) {
            this.svcUI.navTo(`${this.pref}list`);
        }
    }

    onTypeChange(ev): void {
        console.log(`onTypeChange(${ev})`);
        this.accSubTypes = [ { _id: '1', text: ev } ];
    }

    onSubmit(): void {
        this.submitting = true;
        console.log('onSubmit', this.editForm.value);
        
        if (this.rtype == 'new') {
            this.subUpdate = this.svcApi.update('accounts', 'create', this.editForm.value)
                .subscribe((res) => {
                    console.log(res);
                    alert('Account successfully created!');
                    this.submitting = false;
                    // this.svcMeta.setMember(this.memberForm.value);
                    this.svcUI.navTo(`${this.pref}list`);
                })
        }
        else {
            const diffObj = this.svcMeta.diffObjects(this.rec, this.editForm.value);
            console.log({ diffObj });
    
            if (diffObj) {
                this.subUpdate = this.svcApi.update('accounts', 'update', diffObj, this.rid)
                    .subscribe((res) => {
                        console.log(res);
                        alert('Changes successfully saved!');
                        this.submitting = false;
                    });
            }
        }

    }

}
