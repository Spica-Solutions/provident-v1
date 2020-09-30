import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormGroup, Validator, Validators, AbstractControl, ValidationErrors, DefaultValueAccessor } from '@angular/forms';

@Component({
    selector: 'sp-field-text',
    templateUrl: './field-text.component.html',
    styleUrls: [
        './field-text.component.css',
        '../../../styles/forms.css',
        '../../../styles/fields.css'
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => FieldTextComponent)
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => FieldTextComponent)
        }
    ]
})
export class FieldTextComponent implements OnInit, ControlValueAccessor {

    @Input() label: string = "Label";
    @Input() className: string = "";
    @Input() controlId: string = "";
    @Input() isRequired: boolean = false;
    @Input() isDisabled: boolean = false;
    @Input() maxLength: number = 80;
    @Input() hint;

    // errorClass: string = "";
    sHint:string = "";
    value: string = "";
    disabled: boolean = false;
    fldForm: FormGroup;

    constructor() { }

    ngOnInit(): void {
        // console.log(`*** onInit > isRequired: ${this.isRequired}, isDisabled: ${this.isDisabled}`);

        this.sHint = this.isRequired == true ? "Required" : "";
        if (this.hint) {
            this.sHint = this.hint;
        }

        this.fldForm = new FormGroup({
            fld: new FormControl("",
                this.isRequired == true ?
                    [Validators.required, Validators.maxLength(this.maxLength)] : null)
        });

        // this.isDisabled == true ? this.fldForm.get('fld').disable() : this.fldForm.get('fld').enable();
    }

    // ControlValueAccessor implem - START
    writeValue(val: string): void {
        // val && this.fldForm.get('fld').setValue(val, { emitEvent: false });
        this.value = val ? val : '';
    }

    registerOnChange(fn: any): void {
        // this.fldForm.valueChanges.subscribe(fn);
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        // isDisabled ? this.fldForm.disable() : this.fldForm.enable();
        this.disabled = isDisabled;
    }
    // ControlValueAccessor implem - END

    onChange(event) {
        // console.log(`onChange(${event})`);
    }

    onTouched(event) {
        // console.log(`onTouched(${event})`);
        if (this.isRequired == true && !event) {
            console.log('empty');
        }
    }

    validate(c: AbstractControl): ValidationErrors | null {
        // console.log("fld validation", c.value);
        return this.fldForm.valid ? null : { invalidForm: { valid : false, message: 'fldForm fields are invalid!' }};
    }

}
