import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SpApiService } from 'src/app/modules/services/sp-api.service';
import { SpMetadataService } from 'src/app/modules/services/sp-metadata.service';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'sp-member-edit-form',
    templateUrl: './member-edit-form.component.html',
    styleUrls: [
        './member-edit-form.component.css',
        '../../../styles/pages.css',
        '../../../styles/cards.css',
        '../../../styles/forms.css',
        '../../../styles/fields.css'
    ]
})
export class MemberEditFormComponent implements OnInit {

    memId: string = '';
    rec: any;
    subRec: Subscription;
    subMeta: Subscription;

    rid: string;
    paramsSub: Subscription;
    rtype: string;
    urlSub: Subscription;
    updateSub: Subscription;
    // member:any;
    // subFetch: Subscription;

    memberForm: FormGroup;
    showChangePwd = false;
    submitting = false;
    globalData: object;
    globalLists: object;

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
        console.log(this.globalData);
        console.log(this.globalLists);

        this.initForm();

        this.rec = this.svcMeta.activeRecord;
        console.log(this.rec);

        this.svcUI.parseRouteData(this.route);
        this.rid = this.svcUI.recordId;
        this.rtype = this.svcUI.recordType;

        if (this.rtype != 'new') {
            this.svcUI.changeActiveTab(this.rtype);
            this.initFormValues();
        }
    }

    ngOnDestroy(): void {
        // this.paramsSub.unsubscribe();
        // this.urlSub.unsubscribe();
        this.svcUI.destroyRouteSubs();

        if (this.updateSub) {
            this.updateSub.unsubscribe();
        }
    }

    initForm() {
        console.log('initForm();');
        this.memberForm = this.fb.group({
            firstname: new FormControl(""),
            middlename: new FormControl(""),
            lastname: new FormControl(""),
            dob: new FormControl(""),
            email: new FormControl(""),
            mobilephone: new FormControl(""),
            homephone: new FormControl(""),
            empid: new FormControl(""),
            title: new FormControl(""),
            salary: new FormControl(""),
            location: new FormControl(""),
            office: new FormControl(""),
            membersince: new FormControl(""),
            bankname: new FormControl(),
            accname: new FormControl(),
            accnumber: new FormControl(),
            pwd: new FormControl(),
            isactive: new FormControl(),
            hasaccess: new FormControl()
        });
    }

    initFormValues(): void {
        console.log('initFormValues');
        console.log(this.rec);
        this.memberForm.setValue({
            firstname: this.rec.firstname || "",
            middlename: this.rec.middlename || "",
            lastname: this.rec.lastname || "",
            dob: this.svcUI.formatDate(this.rec.dob) || "",
            email: this.rec.email || "",
            mobilephone: this.rec.mobilephone || "",
            homephone: this.rec.homephone || "",
            empid: this.rec.empid || "",
            title: this.rec.title || "",
            salary: this.rec.salary || "",
            location: this.rec.location || "",
            office: this.rec.office || "",
            membersince: this.svcUI.formatDate(this.rec.membersince) || "",
            bankname: this.rec.bankname || "",
            accname: this.rec.accname || "",
            accnumber: this.rec.accnumber || "",
            pwd: this.rec.pwd || "",
            isactive: this.rec.isactive || true,
            hasaccess: this.rec.hasaccess || true
        });
    }

    showChangePassword(show): void {
        this.showChangePwd = show;
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

    gotoList(): void {
        if (confirm('You may lose any unsaved changes. Continue?')) {
            this.svcUI.navTo('/v1/member/list');
        }
    }

    onSubmit() {
        this.submitting = true;
        console.log(this.memberForm.value);
        console.log('onSubmit', this.memberForm.value);
        // return;
        
        if (this.rtype == 'new') {
            this.updateSub = this.svcApi.update('members', 'create', this.memberForm.value)
                .subscribe((res) => {
                    console.log(res);
                    alert('Member successfully created!');
                    this.submitting = false;
                    // this.svcMeta.setMember(this.memberForm.value);
                    this.svcUI.navTo(`/v1/member/edit?id=${res['insertedId']}`);
                })
        }
        else {
            var diffObj = this.svcMeta.diffObjects(this.rec, this.memberForm.value);
            console.log({ diffObj });
    
            if (diffObj) {
                this.updateSub = this.svcApi.update('members', 'update', diffObj, this.rid)
                    .subscribe((res) => {
                        console.log(res);
                        alert('Changes successfully saved!');
                        this.submitting = false;
                    });
            }
        }

    }

}
