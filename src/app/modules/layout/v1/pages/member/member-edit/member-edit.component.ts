import { Component, OnInit } from '@angular/core';
import { SpUiService } from 'src/app/modules/services/sp-ui.service';

@Component({
  selector: 'sp-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: [
      './member-edit.component.css',
      '../../../styles/pages.css',
      '../../../styles/forms.css',
      '../../../styles/cards.css'
    ]
})
export class MemberEditComponent implements OnInit {

  constructor(
      private svcUI: SpUiService
  ) { }

  ngOnInit(): void {
  }

  gotoList(): void {
      this.svcUI.navTo('/v1/member/list');
  }

}
