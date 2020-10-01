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

    diffObjects(refObj, compObj): object {
        const keys1 = Object.keys(refObj);
        const keys2 = Object.keys(compObj);
        var objChanges = {};
      
        if (keys1.length == keys2.length) {
            return null;
        }

        var count = 0;
        const rx = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
        for (let key of keys1) {
            if (refObj.hasOwnProperty(key) != true || key == '_id') {
                continue;
            }

            if (rx.test(refObj[key]) == true) {
                console.log(`checking date field ${key}: ${refObj[key]} => ${compObj[key]}`);
                const refdt = (new Date(refObj[key])).toString();
                const compdt = (new Date(compObj[key])).toString();
                console.log({ refdt, compdt });

                if (refdt !== compdt) {
                    console.log(`adding ${key} to objChanges...`);
                    objChanges[key] = compObj[key];
                    count++;
                }
            }
            else {
                if (refObj[key] !== compObj[key]) {
                    objChanges[key] = compObj[key];
                    count++;
                }
            }
        }
      
        return count > 0 ? objChanges : null;

        // const keys1 = Object.keys(object1);
        // // const keys2 = Object.keys(object2);
        // var objChanges = {};

        // // if (keys1.length !== keys2.length) {
        // //     return false;
        // // }

        // for (const key of keys1) {
        //     const val1 = object1[key];
        //     const val2 = object2[key];
        //     const areObjects = this.isObject(val1) && this.isObject(val2);

        //     if (areObjects && !this.deepEqual(val1, val2) ||
        //         !areObjects && val1 !== val2) {
        //         return false;
        //     }
        // }

        // return objChanges;
    }

    isObject(object): boolean {
        return object != null && typeof object === 'object';
    }
}
