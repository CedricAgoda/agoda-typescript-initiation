import * as $ from 'jquery';
import { IValidator, EmailValidator, TextValidator, PasswordValidator, FormValidator, Validable } from './lib/validator';

export default class FormValidation {
    private _textlValidator: IValidator = new TextValidator();
    private _emailValidator: IValidator = new EmailValidator();
    private _passwordValidator: IValidator = new PasswordValidator();
    private _formValidator = new FormValidator();

    setupValidation = (): void => {
        let firstname: Validable = {
            element: {
                input: <HTMLInputElement>$('#firstname')[0]
            },
            validator: this._textlValidator
        };
        
        this._formValidator.addElement(firstname);
        let lastname: Validable = {
            element: {
                input: <HTMLInputElement>$('#lastname')[0]
            },
            validator: this._textlValidator
        };
        this._formValidator.addElement(lastname);
        let email: Validable = {
            element: {
                input: <HTMLInputElement>$('#email')[0]
            },
            validator: this._emailValidator
        };
        this._formValidator.addElement(email);
        let password: Validable = {
            element: {
                input: <HTMLInputElement>$('#password')[0]
            },
            validator: this._passwordValidator
        };
        this._formValidator.addElement(password);
        let password2: Validable = {
            element: {
                input: <HTMLInputElement>$('#password2')[0]
            },
            validator: this._passwordValidator
        };
        this._formValidator.addElement(password2);

        $('#registration').submit(this.submit);
    }

    private submit = (): boolean => {
        this._formValidator.isValid('');
        return false;
    }
}