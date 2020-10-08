import { Injectable } from '@angular/core';
import { SpApiService } from '../../../services/sp-api.service';

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class V1Resolver implements Resolve<any> {

    constructor(
        private svcApi: SpApiService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log('resolving v1...');
        return this.svcApi.getGlobalsFromDb();
    }
}