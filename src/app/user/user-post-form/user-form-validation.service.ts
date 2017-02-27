import { FormControl } from '@angular/forms';

export class UserFormValidationService {

  /*static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'selectCategory': 'Please select Category',
            'applyRating': 'Please Rate Experience',
            'uploadImage': 'Plese upload Image.',
        };
        return config[validatorName];
    }*/

    static categoryValidator(c: FormControl) {
        // string regex /^([a-z0-9]{5,})$/
        if (c.value != "") {
            return null;
        } else {
            return { 'selectCategory': true };
        }
    }

    static rateValidator(c: FormControl) {
        if (c.value > 0 ) {
            return null;
        } else {
            return { 'applyRating': true };
        }
    }

    static imageValidator(c: FormControl) {
        var imageRegex = /^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/;
        if (c.value != "") {
            return null;
        } else {
            return { 'uploadImage': true };
        }
    }
}
