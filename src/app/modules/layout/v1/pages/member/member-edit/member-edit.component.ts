import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SpMetadataService } from 'src/app/modules/services/sp-metadata.service';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';
import { map } from 'rxjs/operators';
import { SpApiService } from 'src/app/modules/services/sp-api.service';

@Component({
  selector: 'sp-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: [
      './member-edit.component.css',
      '../../../styles/pages.css',
      '../../../styles/cards.css',
      '../../../styles/forms.css',
      '../../../styles/fields.css'
    ]
})
export class MemberEditComponent implements OnInit {

    membername: string = "";
    rec: any;
    subRec: Subscription;
    subMeta: Subscription;
    subUI: Subscription;
    showChangePwd = false;

    public memberForm: FormGroup;
    tabsTouched: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private svcApi: SpApiService,
        private svcMeta: SpMetadataService,
        private svcUI: SpUiService
    ) { }

    ngOnInit(): void {
        console.log('Edit: onInit()');
        this.initForm();
        
        this.subRec = this.route.data.pipe(map((res) => {
            return res.rec;
        })).subscribe((rec) => {
            console.log(rec);
            this.rec = rec;
            this.membername = `Member #${rec.empid} - ${rec.lastname}, ${rec.firstname}`;
            // this.initFormValues();
            
            this.svcMeta.setActiveRecord(this.rec);
        });
        
        this.subUI = this.svcUI.onActiveTabChanged().subscribe((tab) => {
            console.log(`  >> Changed tab: ${tab}`);
            if (this.tabsTouched.indexOf(tab) < 0) {
                this.tabsTouched.push(tab);
            }
            console.log(this.tabsTouched);
        });
    }

    ngOnDestroy(): void {
        this.subRec.unsubscribe();
        this.subUI.unsubscribe();
    }

    // onSubmit() {
    //     console.log('onSubmit', this.memberForm.value);
    // }

    gotoList(): void {
        if (confirm('You may lose any unsaved changes. Continue?')) {
            this.svcUI.navTo('/v1/member/list');
        }
    }

    showChangePassword(show): void {
        this.showChangePwd = show;
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
            firstname: this.rec.firstname,
            middlename: this.rec.middlename[0],
            lastname: this.rec.lastname,
            dob: this.formatDate(this.rec.dob),
            email: this.rec.email,
            mobilephone: this.rec.mobilephone,
            homephone: this.rec.homephone,
            empid: this.rec.empid,
            title: this.rec.title,
            salary: this.rec.salary,
            location: this.rec.location,
            office: this.rec.office,
            membersince: this.formatDate(this.rec.membersince),
            bankname: this.rec.bankname,
            accname: this.rec.accname,
            accnumber: this.rec.accnumber,
            pwd: this.rec.pwd,
            isactive: this.rec.isactive,
            hasaccess: this.rec.hasaccess
        });
    }

    formatDate(str): string {
        const dt = new Date(str);
        return `${(dt.getMonth()+1).toString()}/${dt.getDate()}/${dt.getFullYear()}`;
    }

}
