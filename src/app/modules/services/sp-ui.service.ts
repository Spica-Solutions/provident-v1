import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpUiService {

    pageTitle: string = '';
    pageTitleChange: Subject<string> = new Subject<string>();

    recordType: string = "";
    recordTypeChange: Subject<string> = new Subject<string>();
  
    recordId: string = "";
    recordIdChange: Subject<string> = new Subject<string>();

    activeTab: string = "";
    activeTabChanged: Subject<string> = new Subject<string>();
    tabsTouched: string[] = [];
  
    constructor(
        private router: Router
    ) { }

    navTo(page, parms?): void {
        var url = `${page}`;

        if (parms) {
            url += '?';
            for(let [k, v] of Object.entries(parms)) {
                url += `${k}=${v}&`;
            }
        }

        console.log(`url: ${url}`);
        this.router.navigateByUrl(url);
    }

    // Page Title - START
    setPageTitle(str) {
        console.log(`  >> setPageTitle('${str}')`);
        this.pageTitle = str;
        this.pageTitleChange.next(this.pageTitle);
    }

    onPageTitleChange(): Observable<any> {
        return this.pageTitleChange.asObservable();
    }
    // Page Title - END

    // Record Type - START
    setRecordType(str) {
        console.log(`  >> setRecordType('${str}')`);
        this.recordType = str;
        this.recordTypeChange.next(this.recordType);
    }

    onRecordTypeChange(): Observable<any> {
        return this.recordTypeChange.asObservable();
    }
    // Record Type - END

    // Record Id - START
    setRecordId(str) {
        console.log(`  >> setRecordId('${str}')`);
        this.recordId = str;
        this.recordIdChange.next(this.recordId);
    }

    onRecordIdChange(): Observable<any> {
        return this.recordIdChange.asObservable();
    }
    // Record Type - END

    // Record Id - START
    resetActiveTabs() {
        this.tabsTouched = [];
    }
    
    changeActiveTab(str) {
        console.log(`  >> changeActiveTab('${str}')`);
        this.activeTab = str;
        if (this.tabsTouched.indexOf(this.activeTab) < 0) {
            this.tabsTouched.push(this.activeTab);
        }
        this.activeTabChanged.next(this.activeTab);
    }

    onActiveTabChanged(): Observable<any> {
        return this.activeTabChanged.asObservable();
    }
    // Record Type - END
}
