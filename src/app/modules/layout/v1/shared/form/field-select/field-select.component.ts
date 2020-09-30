import { Component, ElementRef, forwardRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, SelectControlValueAccessor, Validators, Validator } from '@angular/forms';

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
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => FieldSelectComponent)
        // },
        // {
        //     provide: NG_VALIDATORS,
        //     multi: true,
        //     useExisting: forwardRef(() => FieldSelectComponent)
        }
    ]
})
export class FieldSelectComponent implements OnInit, ControlValueAccessor {

    @Input() label: string = "Label";
    @Input() type: string = "";
    @Input() className: string = "";
    @Input() isRequired: boolean = false;
    @Input() isDisabled: boolean = false;
    @Input() hint;

    arr = [];
    sHint = "";
    value: any;
    fldForm: FormGroup;

    constructor() { }

    ngOnInit(): void {
        // console.log(`*** onInit > isRequired: ${this.isRequired}`);
        this.setOptions();

        this.sHint = this.isRequired == true ? "Required" : "";
        if (this.hint) {
            this.sHint = this.hint;
        }
        this.fldForm = new FormGroup({
            fld: new FormControl("", this.isRequired == true ? [Validators.required] : null)
        });
    }

    // ControlValueAccessor implem - START
    writeValue(obj: any): void {
        // obj && this.fldForm.setValue(obj, { emitEvent: false });
        this.value = obj;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.fldForm.disable() : this.fldForm.enable();
    }
    // ControlValueAccessor implem - END

    onChange(event) {
        // console.log(`${event.target.name} onChange(${event.target.value})`);
    }

    onTouched(event) {
        // console.log(`onTouched(${event})`);
    }

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
