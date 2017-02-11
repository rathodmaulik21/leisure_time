import { FormGroup } from '@angular/forms';

/**
 * Compare Passwords based on given arguments
 * @method comparePasswords
 * @param {String} passwordKey default passwordKey
 * @param {String} confirmPasswordKey default confirmPasswordKey
 * @return {JSON}
 */
export function comparePasswords(passwordKey = 'password', confirmPasswordKey = 'confirmPassword') {
  return (group: FormGroup): { [key: string]: boolean } => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {
        mismatched: true
      };
    }
  };
}