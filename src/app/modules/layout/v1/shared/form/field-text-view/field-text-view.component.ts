import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormGroup, Validator, Validators, AbstractControl, ValidationErrors, DefaultValueAccessor } from '@angular/forms';

@Component({
    selector: 'sp-field-text-view',
    templateUrl: './field-text-view.component.html',
    styleUrls: [
        './field-text-view.component.css',
        '../../../styles/forms.css',
        '../../../styles/fields.css',
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => FieldTextViewComponent)
        }
    ]
})
export class FieldTextViewComponent implements OnInit, ControlValueAccessor {

    @Input() label: string = "Label";
    @Input() text: string = "";
    @Input() className: string = "";
    @Input() isRequired: boolean = false;

    public fldForm: FormGroup;

    constructor() { }

    ngOnInit(): void {
        this.fldForm = new FormGroup({
            fld: new FormControl("",
                this.isRequired == true ? [Validators.required] : null)
        });
        this.fldForm.patchValue({ fld: this.text });
    }

    // ControlValueAccessor implem - START
    writeValue(obj: any): void {
        obj && this.fldForm.setValue(obj, { emitEvent: false });
    }

    registerOnChange(fn: any): void {
        // this.onChange = fn;
        // console.log('registerOnChange');
        this.fldForm.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: any): void {
        // console.log('registerOnTouched');
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.fldForm.disable() : this.fldForm.enable();
    }

    onChange(event) {
        // console.log(`onChange(${event})`);
    }

    onTouched(event) {
        // console.log(`onTouched(${event})`);
        // if (this.isRequired == true && !event) {
        //     console.log('empty');
        // }
    }
    // ControlValueAccessor implem - END

}
