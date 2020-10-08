import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpMetadataService {

    searchResults:object[] = [];
    searchResultsChange: Subject<object[]> = new Subject<object[]>();

    activeRecord:object;
    activeRecordChange: Subject<object> = new Subject<object>();

    globalData: object[] = [];

    globalLists: object;

    months: object[] = [
        { name: 'January', shortname: 'Jan' },
        { name: 'February', shortname: 'Feb' },
        { name: 'March', shortname: 'Mar' },
        { name: 'April', shortname: 'Apr' },
        { name: 'May', shortname: 'May' },
        { name: 'June', shortname: 'Jun' },
        { name: 'July', shortname: 'Jul' },
        { name: 'August', shortname: 'Aug' },
        { name: 'September', shortname: 'Sep' },
        { name: 'October', shortname: 'Oct' },
        { name: 'November', shortname: 'Nov' },
        { name: 'December', shortname: 'Dec' }
    ];
    
    constructor() { }

    public getUser() {
        return {
            location: "5f74099793c120c47adcafa4"
        };
    }

    setGlobalData(obj) {
        console.log('  >> setGlobalData()');
        console.log({ obj });
        this.globalData = obj;
    }

    /**
     * Expected output:
     *  [
     *      { 'type_1': [{el1}, {el2}, ... ] },
     *      { 'type_2': [{el1}, {el2}, ... ] },
     *      ...
     *  ]
     */
    getGlobalLists() {
        this.globalLists = {};
        for (let i=0, n=this.globalData.length; i<n; i++) {
            const k = this.globalData[i]['type'];
            if (this.globalLists.hasOwnProperty(k) == false) {
                this.globalLists[k] = [];
            }
            this.globalLists[k].push(this.globalData[i]);
        }

        return this.globalLists;
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

    setActiveRecord(res) {
        console.log('meta: setActiveRecord');
        this.activeRecord = res;
        console.log(this.activeRecord);
        this.activeRecordChange.next(this.activeRecord);
    }

    onMemberChange(): Observable<any> {
        return this.activeRecordChange.asObservable();
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
