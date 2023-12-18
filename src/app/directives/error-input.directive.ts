import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Directive({
    selector: '[appErrorInput]'
})

export class ErrorInputDirective {

    private _errors: ValidationErrors | null = null;
    private _dirty: boolean = false;
    private _touched: boolean = false;
    private _nativeElement: any;



    @Input() set touched(value: boolean) {
        this._touched = value;
        console.log('_touched', this._touched);
        this.setMessage();
    }

    @Input() set dirty(value: boolean) {
        this._dirty = value;
        console.log('_dirty', this._dirty);
        this.setMessage();
    }


    @Input() set errors(value: ValidationErrors | null) {
        this._errors = value;
        console.log('_errors', this._errors);
        this.setMessage();
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this._nativeElement = elementRef.nativeElement;

    }

    setMessage(): void {
        if (this._touched || this._dirty) {
          if (this._errors) {
            if (this._errors['required']) {
              this._nativeElement.innerText = 'El campo es requerido';
            } else if (this._errors['minlength']) {
              this._nativeElement.innerText = `El número de caracteres debe ser 
                ${this._errors['minlength']['requiredLength']}, pero tienes 
                ${this._errors['minlength']['actualLength']}.`;
            }else if (this._errors['maxlength']) {
                this._nativeElement.innerText = `El número de caracteres debe ser 
                  ${this._errors['maxlength']['requiredLength']}, pero tienes 
                  ${this._errors['maxlength']['actualLength']}.`;
              }
            
          }else{
            this._nativeElement.innerText='Campo valido';
          }
        }
      }
      
}