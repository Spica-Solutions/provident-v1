import { Injectable } from '@angular/core';
import { SpApiService } from '../../../services/sp-api.service';

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class V1RecordResolver implements Resolve<any> {

    constructor(
        private svcApi: SpApiService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log(`V1-RECORD RESOLVER, type=${route.data['listtype']}`);
        const id = route.queryParamMap.get('id');
        return this.svcApi.get(route.data['listtype'], id);
    }
}