import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SpApiService } from 'src/app/modules/services/sp-api.service';
import { SpMetadataService } from 'src/app/modules/services/sp-metadata.service';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-member-new',
    templateUrl: './member-new.component.html',
    styleUrls: [
        './member-new.component.css',
        '../../../styles/pages.css',
        '../../../styles/forms.css'
    ]
})
export class MemberNewComponent implements OnInit {

    membername: string = "";
    rec: any;
    subRec: Subscription;
    subMeta: Subscription;
    subUI: Subscription;
    showChangePwd = false;
    submitting = false;

    memberForm: FormGroup;
    tabsTouched: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private svcApi: SpApiService,
        private svcMeta: SpMetadataService,
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
        console.log('New: onInit()');
        this.initForm();
    }

    ngOnDestroy(): void {
        // this.subRec.unsubscribe();
        // this.subUI.unsubscribe();
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

    // gotoList(): void {
    //     if (confirm('You may lose any unsaved changes. Continue?')) {
    //         this.svcUI.navTo('/v1/member/list');
    //     }
    // }

    // onSubmit() {
    //     this.submitting = true;
    //     console.log(this.memberForm.value);
    //     console.log('onSubmit', this.memberForm.value);
    //     this.svcApi.create('members', this.memberForm.value).subscribe((res) => {
    //         console.log(res);
    //         this.submitting = false;
    //     });
    // }

}
