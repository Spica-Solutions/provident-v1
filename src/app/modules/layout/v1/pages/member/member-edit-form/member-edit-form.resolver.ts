import { Injectable } from '@angular/core';
import { SpApiService } from '../../../../../services/sp-api.service';

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class MemberEditResolver implements Resolve<any> {

    constructor(
        private svcApi: SpApiService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id = route.queryParamMap.get('id');
        console.log(`resolving member-edit... ${id}`);

        return this.svcApi.get('members', id);
    }
}