import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpMetadataService {

    searchResults:any[] = [];
    searchResultsChange: Subject<any[]> = new Subject<any[]>();

    member:any;
    memberChange: Subject<any> = new Subject<any>();

    constructor() { }

    public getUser() {
        return {
            location: "222"
        };
    }

    setSearchResults(res) {
        console.log(`  >> setSearchResults()`);
        this.searchResults = res;
        console.log(this.searchResults);
        this.searchResultsChange.next(this.searchResults);
    }

    onSearchResultsChange(): Observable<any[]> {
        return this.searchResultsChange.asObservable();
    }

    setMember(res) {
        console.log('meta: setMember');
        this.member = res;
        console.log(this.member);
        this.memberChange.next(this.member);
    }

    onMemberChange(): Observable<any> {
        return this.memberChange.asObservable();
    }
}
