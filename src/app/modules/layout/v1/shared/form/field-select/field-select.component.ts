import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import LOAN_TERMS from '../../../../../testdata/loanterms.json';
import LOAN_TYPES from '../../../../../testdata/loantypes.json';
import LOCATIONS from '../../../../../testdata/locations.json';
import MONTHS from '../../../../../testdata/months.json';
import OFFICES from '../../../../../testdata/offices.json';
import RELATIONSHIPS from '../../../../../testdata/relationships.json';

@Component({
    selector: 'sp-field-select',
    templateUrl: './field-select.component.html',
    styleUrls: [
        './field-select.component.css',
        '../../../styles/forms.css',
        '../../../styles/fields.css'
    ],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: FieldSelectComponent
    }]
})
export class FieldSelectComponent implements OnInit, ControlValueAccessor {
    @ViewChild('select') input: ElementRef;
    
    // @Input() type = 'text';
    @Input() label: string = "Label";
    @Input() type: string = "";
    @Input() className: string = "";
    @Input() isRequired: boolean = false;
    // @Input() pattern: string = "";
    // @Input() placeHolder: string = "";
    // @Input() errorMsg: string = "";
    @Input() hint;

    arr = [];
    sHint = "";

    constructor() { }

    ngOnInit(): void {
        this.setOptions();

        this.sHint = this.isRequired == true ? "Required" : "";
        if (this.hint) {
            this.sHint = this.hint;
        }
    }

    // ControlValueAccessor implem - START
    writeValue(obj: any): void {
        this.input.nativeElement.value = obj;
    }

    registerOnChange(fn: any): void {
        this.registerOnChange(fn);
    }

    registerOnTouched(fn: any): void {
        this.registerOnTouched(fn);
    }

    onChange(event) {
        console.log(`onChange(${event})`);
    }

    onTouched(event) {
        console.log(`onTouched(${event})`);
        if (this.isRequired == true && !event) {
            console.log('empty');
        }
    }
    // ControlValueAccessor implem - END

    // TEST DATA
    setOptions(): void {
        switch(this.type) {
            case 'loanterm': {
                this.arr = LOAN_TERMS;
                break;
            }
            case 'loantype': {
                this.arr = LOAN_TYPES;
                break;
            }
            case 'location': {
                this.arr = LOCATIONS;
                break;
            }
            case 'month': {
                this.arr = MONTHS;
                break;
            }
            case 'office': {
                this.arr = OFFICES;
                break;
            }
            case 'relationship': {
                this.arr = RELATIONSHIPS;
                break;
            }
            default: {
                break;
            }
        }
    }
}
