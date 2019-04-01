import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {minValidator} from '../number-validators';

@Directive({
  selector: '[appLowerBound]',
  providers: [{provide: NG_VALIDATORS, useExisting: LowerBoundDirective, multi: true}]
})
export class LowerBoundDirective implements Validator {

  @Input('appLowerBound') appLowerBound: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.appLowerBound ? minValidator(Number(this.appLowerBound))(control)
      : null;
  }

}
