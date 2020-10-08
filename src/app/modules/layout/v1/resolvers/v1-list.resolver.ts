import { Injectable } from '@angular/core';
import { SpApiService } from '../../../services/sp-api.service';

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class V1ListResolver implements Resolve<any> {

    constructor(
        private svcApi: SpApiService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log(`V1-LIST RESOLVER, type=${route.data['listtype']}`);

        return this.svcApi.find(route.data['listtype'], true);
    }
}