import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'sp-field-text',
    templateUrl: './field-text.component.html',
    styleUrls: [
        './field-text.component.css',
        '../../../styles/forms.css',
        '../../../styles/fields.css',
    ],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: FieldTextComponent
    }]
})
export class FieldTextComponent implements OnInit, ControlValueAccessor {
    @ViewChild('input') input: ElementRef;
    
    // @Input() type = 'text';
    @Input() label: string = "Label";
    @Input() className: string = "";
    @Input() isRequired: boolean = false;
    @Input() pattern: string = "";
    @Input() placeHolder: string = "";
    @Input() errorMsg: string = "";
    @Input() hint;

    disabled: boolean;
    errorClass: string = "";
    sHint:string = "";

    constructor() { }

    ngOnInit(): void {
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

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
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

    validate(): void {
        console.log(`validate`)
    }

}
