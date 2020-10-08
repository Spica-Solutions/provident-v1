import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sp-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    @Input() role:string = "";

    permissions: object = {};

    constructor() { }

    ngOnInit(): void {
        switch(this.role.toLowerCase()) {
            case 'admin': {
                this.permissions = {
                    member_menu: true,
                    member_list: true,
                    member_new: true,
                    member_import: true,
                    loan_menu: true,
                    report_menu: true,
                    setup_menu: true
                }
                break;
            }
            case 'member': {
                this.permissions = {
                    member_menu: false,
                    member_list: false,
                    member_new: false,
                    member_import: false,
                    loan_menu: false,
                    report_menu: false,
                    setup_menu: false
                }
                break;
            }
            default: break;
        }
    }

}
