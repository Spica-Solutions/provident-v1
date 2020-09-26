import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'sp-field-text-view',
    templateUrl: './field-text-view.component.html',
    styleUrls: [
        './field-text-view.component.css',
        '../../../styles/forms.css',
        '../../../styles/fields.css',
    ],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: FieldTextViewComponent
    }]
})
export class FieldTextViewComponent implements OnInit {
    @ViewChild('input') input: ElementRef;
    
    // @Input() type = 'text';
    @Input() label: string = "Label";
    @Input() text: string = "";
    @Input() className: string = "";

    constructor() { }

    ngOnInit(): void {
    }

}
