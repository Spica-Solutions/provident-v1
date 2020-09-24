import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sp-field-checkbox',
  templateUrl: './field-checkbox.component.html',
  styleUrls: [
      './field-checkbox.component.css',
      '../../../styles/forms.css',
      '../../../styles/fields.css',
    ],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: FieldCheckboxComponent
    }]
})
export class FieldCheckboxComponent implements OnInit {
    @ViewChild('input') input: ElementRef;
    
    // @Input() type = 'text';
    @Input() label: string = "Label";
    @Input() className: string = "";
    @Input() isRequired: boolean = false;
    @Input() hint;

    sHint:string = "";


    constructor() { }

    ngOnInit(): void {
        this.sHint = this.isRequired == true ? "Required" : "";
        if (this.hint) {
            this.sHint = this.hint;
        }
    }

}
