import { Injectable } from '@angular/core';
import { SpApiService } from '../../../../../services/sp-api.service';

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class MemberListResolver implements Resolve<any> {

    constructor(
        private svcApi: SpApiService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log('resolving member-list...');
        return this.svcApi.find('members', true);
    }
}