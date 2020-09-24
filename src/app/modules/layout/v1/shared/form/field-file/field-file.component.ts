import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'sp-field-file',
    templateUrl: './field-file.component.html',
    styleUrls: [
        './field-file.component.css',
        '../../../styles/forms.css',
        '../../../styles/fields.css',
    ]
})
export class FieldFileComponent implements OnInit {
    @ViewChild('input') input: ElementRef;
    
    // @Input() type = 'text';
    @Input() label: string = "Label";
    @Input() className: string = "";

    constructor() { }

    ngOnInit(): void {
    }

}
