import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpApiService } from 'src/app/modules/services/sp-api.service';
import { SpMetadataService } from 'src/app/modules/services/sp-metadata.service';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-locations',
    templateUrl: './locations.component.html',
    styleUrls: [
        './locations.component.css',
        '../../../styles/pages.css',
        '../../../styles/forms.css',
        '../../../styles/fields.css',
        '../../../styles/tables.css'
    ]
})
export class LocationsComponent implements OnInit {

    locations: object[];
    list: object[];
    el: object;
    showEditForm:boolean = false;
    editForm: FormGroup;
    submitting: boolean = false;
    subApi: Subscription;
    subLoc: Subscription;

    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router,
        private svcApi: SpApiService,
        private svcMeta: SpMetadataService,
        private svcUI: SpUiService
    ) {
        router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        this.subLoc = this.route.data.pipe(map((res) => {
            return res.list;
        })).subscribe((data) => {
            console.log(data);
            this.list = data;
            this.locations = [];

            this.list.map(x => {
                this.locations.push({ name: x['name'], order: x['order'] });

                if (x['offices'] && x['offices'].length > 0) {
                    for (let i=0, n=x['offices'].length; i<n; i++) {
                        const y = x['offices'][i];
                        this.locations.push({
                            name: y['name'],
                            order: y['order'],
                            child: true
                        });
                    }
                }
            });
            console.log(this.locations);
        });

        
        // const gdata = this.svcMeta.getGlobalLists();
        // this.list = gdata['location'];

        this.initForm();
    }

    ngOnDestroy(): void {
        this.subLoc.unsubscribe();
    }

    initForm(): void {
        console.log('initForm()');
        this.editForm = this.fb.group({
            text: new FormControl(""),
            isactive: new FormControl("")
        });
    }

    initFormValues(obj?): void {
        console.log('initFormValues');
        console.log({ obj });

        this.editForm.patchValue({
            text: ((obj != null || obj != undefined) ? obj.text || "" : ""),
            isactive: ((obj != null || obj != undefined) ? obj.isactive || false : false)
        });
    }

    toggleEditForm(show): void {
        this.showEditForm = show;
    }

    createLoc(): void {
        console.log('createLoc...');
        this.showEditForm = true;
        this.el = null;
        this.initFormValues();
    }

    editLoc(id): void {
        console.log(`editLoc =${id}`);
        this.showEditForm = true;
        this.el = this.list.find(x => { return x['order'] == id });
        this.initFormValues(this.el);
    }

    deleteLoc(id): void {
        
    }

    submitLoc(): void {
        this.submitting = true;
        this.toggleEditForm(false);
        console.log('** Locations submitLoc()');
        console.log(this.editForm.value);
        if (this.el) {
            // this.svcApi.update('lists', 'update', this.editForm.value, this.el['_id']);
            // this.subApi((res) => {
            //         console.log(res);
            //         alert('Location successfully created!');
            //         this.submitting = false;
            //     });
        }
    }

    updateList(): void {
    }

}
