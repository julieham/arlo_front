import {AbstractControl, ValidatorFn} from '@angular/forms';

export function minValidator(lowerBound: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const invalid = control.value <= lowerBound;
    return invalid ? {'lower_bound': {value: control.value}} : null;
  };
}

export function maxValidator(upperBound: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const invalid = control.value >= upperBound;
    return invalid ? {'lower_bound': {value: control.value}} : null;
  };
}
