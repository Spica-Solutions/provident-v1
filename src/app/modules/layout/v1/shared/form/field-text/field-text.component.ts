import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
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
    
    // @ViewChild('input') input: ElementRef;
    
    // @Input() type = 'text';
    @Input() label: string = "Label";
    @Input() className: string = "";
    @Input() controlId: string = "";
    @Input() isRequired: boolean = false;
    @Input() isDisabled: boolean = false;
    @Input() maxLength: number = 80;
    // @Input() parentForm: FormGroup;
    // @Input() pattern: string = "";
    // @Input() placeHolder: string = "";
    // @Input() errorMsg: string = "";
    @Input() hint;

    // disabled: boolean;
    errorClass: string = "";
    sHint:string = "";

    public fldTextForm: FormGroup;

    constructor() { }

    ngOnInit(): void {
        this.sHint = this.isRequired == true ? "Required" : "";
        if (this.hint) {
            this.sHint = this.hint;
        }
        console.log(`onInit: isRequired = ${this.isRequired}`);
        this.fldTextForm = new FormGroup({
            inputFld: new FormControl("",
                this.isRequired == true ?
                    [Validators.required, Validators.maxLength(this.maxLength)] : null)
        })
    }

    // ControlValueAccessor implem - START
    writeValue(obj: any): void {
        obj && this.fldTextForm.setValue(obj, { emitEvent: false });
    }

    registerOnChange(fn: any): void {
        // this.onChange = fn;
        console.log('registerOnChange');
        this.fldTextForm.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: any): void {
        console.log('registerOnTouched');
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.fldTextForm.disable() : this.fldTextForm.enable();
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

    validate(c: AbstractControl): ValidationErrors | null {
        console.log("inputFld validation", c);
        return this.fldTextForm.valid ? null : { invalidForm: { valid : false, message: 'fldTextForm fields are invalid!' }};
    }

}
