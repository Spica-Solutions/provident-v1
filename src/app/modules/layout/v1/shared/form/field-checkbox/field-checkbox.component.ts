import { Component, ElementRef, forwardRef, Input, OnInit, Renderer2 } from '@angular/core';
import { CheckboxControlValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormGroup, Validator, Validators, AbstractControl, ValidationErrors, DefaultValueAccessor } from '@angular/forms';

@Component({
    selector: 'sp-field-checkbox',
    templateUrl: './field-checkbox.component.html',
    styleUrls: [
        './field-checkbox.component.css',
        '../../../styles/forms.css',
        '../../../styles/fields.css',
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => FieldCheckboxComponent)
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => FieldCheckboxComponent)
        }
    ]
})
export class FieldCheckboxComponent implements OnInit, ControlValueAccessor {

    @Input() label: string = "Label";
    @Input() className: string = "";
    @Input() isRequired: boolean = false;
    @Input() isDisabled: boolean = false;
    @Input() hint;

    sHint:string = "";
    fldForm: FormGroup;
    value = false;
    disabled = false;

    constructor() { }

    ngOnInit(): void {
        this.sHint = this.isRequired == true ? "Required" : "";
        if (this.hint) {
            this.sHint = this.hint;
        }
        // console.log(`onInit: isRequired = ${this.isRequired}`);
        this.fldForm = new FormGroup({
            fld: new FormControl("")
        });
    }

    // ControlValueAccessor implem - START
    writeValue(obj: any): void {
        obj && this.fldForm.setValue(obj, { emitEvent: false });
    }

    registerOnChange(fn: any): void {
        // this.onChange = fn;
        // console.log('registerOnChange');
        this.onChange = fn;
        this.fldForm.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: any): void {
        // console.log('registerOnTouched');
        this.onTouched = fn;
    }

    handleChange(checked: boolean) {
        // console.log(`handleChange: ${checked}`);
    }

    setDisabledState?(isDisabled: boolean): void {
        // isDisabled ? this.fldForm.disable() : this.fldForm.enable();
        this.disabled = isDisabled;
    }
    // ControlValueAccessor implem - END

    onChange(event) {
        // console.log(`onChange(${event})`);
    }

    // onTouched = () => {}
    onTouched(event) {
        // console.log(`onTouched(${event})`);
        // if (this.isRequired == true && !event) {
        //     console.log('empty');
        // }
    }

    validate(c: AbstractControl): ValidationErrors | null {
        // console.log("fld validation", c);
        return this.fldForm.valid ? null : { invalidForm: { valid : false, message: 'fldForm fields are invalid!' }};
    }

}
