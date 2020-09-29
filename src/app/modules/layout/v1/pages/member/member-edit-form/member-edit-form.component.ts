import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SpApiService } from 'src/app/modules/services/sp-api.service';
import { SpMetadataService } from 'src/app/modules/services/sp-metadata.service';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';
import { formatCurrency } from '@angular/common';

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

    public memberForm: FormGroup;

    memId: string = '';
    member:any;
    subFetch: Subscription;

    showChangePwd = false;

    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private svcApi: SpApiService,
        private svcMeta: SpMetadataService,
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.getRecord();
        
        this.subFetch = this.svcMeta.onMemberChange().subscribe(d => {
            if (d) {
                console.log('Retrieving member info from meta...');
                this.member = d;
            }
        })
    }

    ngOnDestroy(): void {
        this.subFetch.unsubscribe();
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
            // 'location': new FormControl(null, Validators.required),
            // 'office': new FormControl(null, Validators.required),
            membersince: new FormControl(""),
            bankname: new FormControl(),
            accname: new FormControl(),
            accnum: new FormControl(),
            pwd: new FormControl()
            // 'isactive': new FormControl(),
            // 'hasaccess': new FormControl()
        });
    }

    getRecord(): void {
        this.route.queryParams
            .subscribe(params => {
                this.memId = params.id;

                if (this.memId) {
                    this.svcApi.get('members', this.memId);
                }
            });
    }

    initFormValues(): void {
        this.memberForm.setValue({
            firstname: this.member.firstname,
            middlename: this.member.middlename,
            lastname: this.member.lastname
        })
    }

    showChangePassword(show): void {
        this.showChangePwd = show;
    }

    gotoList(): void {
        if (confirm('You may lose any unsaved changes. Continue?')) {
            this.svcUI.navTo('/v1/member/list');
        }
    }

    onSubmit() {
        console.log('onSubmit', this.memberForm.value);
    }

}
