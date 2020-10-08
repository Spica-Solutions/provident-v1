import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpMetadataService } from '../../services/sp-metadata.service';

@Component({
    selector: 'sp-v1',
    templateUrl: './v1.component.html',
    styleUrls: ['./v1.component.css']
})
export class V1Component implements OnInit {

    data: object;
    subLists: Subscription;

    constructor(
        private route: ActivatedRoute,
        private svcMeta: SpMetadataService
    ) { }

    ngOnInit(): void {
        this.subLists = this.route.data.pipe(map((res) => {
            return res.data;
        })).subscribe((data) => {
            console.log('*** V1 init ***');
            console.log(data);
            this.data = data;
            
            this.svcMeta.setGlobalData(this.data);
        });
    }

}
