import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
    selector: 'sp-loan-edit-form',
    templateUrl: './loan-edit-form.component.html',
    styleUrls: [
        './loan-edit-form.component.css',
        '../../../../styles/pages.css',
        '../../../../styles/cards.css',
        '../../../../styles/forms.css',
        '../../../../styles/tables.css',
    ]
})
export class LoanEditFormComponent implements OnInit, OnDestroy {

    showMemInfo = false;
    mem: string = '';
    id: string = '';
    rtype: string = '';
    paramsSub: any;
    urlSub: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private svcUI: SpUiService
    ) {
    }

    ngOnInit(): void {
        this.parseRouteData();
    }

    ngAfterContentInit(): void {
        // this.setTitle();
    }

    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
      }
    
    toggleMemInfo(show): void {
        this.showMemInfo = show;
    }

    parseRouteData(): void {
        this.paramsSub = this.route
            .queryParams
            .subscribe(p => {
                this.mem = p['mem'] || '';
                if (this.mem) {
                    this.mem = this.mem.trim();
                }
                console.log(`mem: '${this.mem}'`);

                this.id = p['id'] || '';
                if (this.id) {
                    this.id = this.id.trim();
                }
                console.log(`id: '${this.id}'`);
            }
        );
        console.log(`mem: '${this.mem}', id: '${this.id}'`);

        this.urlSub = this.route
            .parent.url.subscribe(u => {
                // console.log({ u });
                this.rtype = u[u.length - 1].path;
                // console.log(`rtype: ${this.rtype}`);
            }
        );
        console.log(`rtype: '${this.rtype}'`);
        
        this.setTitle();
    }

    setTitle(): void {
        console.log('Setting title...');
        if (this.rtype == 'new') {
            // this.uiSvc.setPageTitle(`${this.rtype} ${this.rid}`);
            this.svcUI.setPageTitle(`new loan`);
        }
        else if (this.rtype == 'edit' && this.id) {
            this.svcUI.setPageTitle(`loan ${this.id}`);
        }
    }
    
}
