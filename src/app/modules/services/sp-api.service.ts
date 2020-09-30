import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SpMetadataService } from './sp-metadata.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpApiService {

    apiName: string = 'SpApiService';
    API_URL:string = "http://localhost:8080/api";
    fetchDone:boolean = true;
    fetchDoneChange: Subject<boolean> = new Subject<boolean>();

    constructor(
        private http: HttpClient,
        private svcMeta: SpMetadataService
    ) { }

    setFetchDone(d) {
        this.fetchDone = d;
        this.fetchDoneChange.next(this.fetchDone);
    }

    onFetchDoneChange(): Observable<boolean> {
        return this.fetchDoneChange.asObservable();
    }

    public find(type: string, locationSpecific: boolean, filters?: object): Observable<any> {
        let query = this.initQuery(locationSpecific);

        if (filters) {
            for (var i in filters) {
                if (filters.hasOwnProperty(i)) {
                    query.push(`${i}=${filters[i]}`);
                }
            }
        }

        return this.http.get(`${this.API_URL}/members?${query.join('&')}`);
    }

    public get(type: string, id: string) {
        var url = `${this.API_URL}/${type}/${id}`;
        console.log(`get: ${url}`);

        // this.setFetchDone(false);
        return this.http.get(`${this.API_URL}/${type}/${id}`);
        // fetch(url)
        //     .then(res => {
        //         console.log(res);
        //         if(res.status !== 200) {
        //             console.log(res);
        //             return;
        //         }

        //         res.json().then(d => {
        //             console.log(d);
        //             this.svcMeta.setMember(res);
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        //     .finally(() => this.setFetchDone(true));
    }

    private initQuery(locationSpecific: boolean) {
        const user = this.svcMeta.getUser();
        let query = [];

        if (locationSpecific == true) {
            query.push(`loc=${user.location}`);
        }

        return query;
    }
}
