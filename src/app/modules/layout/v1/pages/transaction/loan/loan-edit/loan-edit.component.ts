import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-loan-edit',
    templateUrl: './loan-edit.component.html',
    styleUrls: [
        './loan-edit.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/subtabs.css',
        '../../../../styles/forms.css',
        '../../../../styles/fields.css',
    ]
})
export class LoanEditComponent implements OnInit, OnDestroy {

    subs: Subscription;
    pageTitle: string = '';

    constructor(
        private router: Router,
        private svcUI: SpUiService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        this.subs = this.svcUI.onPageTitleChange().subscribe(d => {
            if (d) {
                console.log(`loan-edit setting title=${d}`);
                this.pageTitle = d;
            }
        });
    }

    ngOnDestroy(): void {
        console.log('loan-edit destroy');
        this.subs.unsubscribe();
    }

    gotoMember(id): void {
        this.svcUI.navTo('/v1/member/edit/loans', { id: id });
    }

}
