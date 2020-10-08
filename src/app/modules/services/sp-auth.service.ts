import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpAuthService {

    role = {};

    constructor() { }

    // Permission Types:
    // 'none' | null    No permissions
    // 'ownview'        Can view, list, and search own records of type
    // 'ownfull'        Can view, list, search, create, edit, delete own records of type
    // 'view'           Can view, list, and search all records of type
    // 'create'         Can create records of type
    // 'edit'           Can edit records of type
    // 'approve'        Can approve records of type
    // 'full'           Can view, create, edit, approve, delete
    getMemberPermissions(type) {
        switch(type.toLowerCase()) {
            case 'member': {
                this.role = {
                    member: 'ownfull',
                    loan: 'ownfull',
                    contrib: 'ownview'
                };
                break;
            }
            default: break;
        }
    }
}
