import { AbstractControl, ValidationErrors } from "@angular/forms";

export function easyPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const easy = /^\d+$|^[a-z]+$|^[\W_]+$/gi.test(control.value);
    return easy ? { easy: { value: control.value } } : null;
}
  
export function mediumPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const medium = /^(?=.*\d)(?=.*?[a-z])[a-z\d]+$|^(?=.*\d)(?=.*?[\W_])[\d\W_]+$|^(?=.*[\W_])(?=.*?[a-z])[a-z\W_]+$/gi.test(control.value);
    return medium ? { medium: { value: control.value } } : null;
}
  
export function strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const strong = /^(?=.*\d)(?=.*[a-z])(?=.*[\W_])[a-z\d\W_]+$/gi.test(control.value);
    return strong ? { strong: { value: control.value } } : null;
}
  