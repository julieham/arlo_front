import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {maxValidator} from '../number-validators';

@Directive({
  selector: '[appUpperBound]',
  providers: [{provide: NG_VALIDATORS, useExisting: UpperBoundDirective, multi: true}]

})
export class UpperBoundDirective implements Validator {

  @Input('appUpperBound') appUpperBound: string;

  constructor() {
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.appUpperBound ? maxValidator(Number(this.appUpperBound))(control)
      : null;
  }

}
