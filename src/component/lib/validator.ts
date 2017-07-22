import { ErrorHandler } from './error-handler';

export interface IValidator {
    isValid(component: string): boolean
}

export class EmailValidator implements IValidator {
    private static readonly EMAIL_PATTERN: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    isValid = (text: string): boolean => {
        return EmailValidator.EMAIL_PATTERN.test(text)
    }
}

export class TextValidator implements IValidator {
    private static readonly TEXT_MINLEN: number = 1

    isValid = (text: string): boolean => {
        return text.length >= TextValidator.TEXT_MINLEN
    }
}

export class PasswordValidator implements IValidator {
    private static readonly PASSWORD_MINLEN: number = 8

    isValid = (text: string): boolean => {
        return text.length >= PasswordValidator.PASSWORD_MINLEN
    }
}

export interface AgElement {
    input: HTMLInputElement,
    message?: string
}

export interface Validable {
    element: AgElement,
    validator: IValidator
}

export class FormValidator implements IValidator {
    private _validables: Array<Validable>;
    private _errorHandler: ErrorHandler;

    constructor() {
        this._validables = new Array<Validable>();
        this._errorHandler = new ErrorHandler();
    }

    isValid = (component: string): boolean => {
        let isFormValid = true;

        for (let validable of this._validables) {
            let valid = validable.validator.isValid(validable.element.input.value);
            if (!valid) {
                this._errorHandler.setError(validable.element.input);
            }
            isFormValid = isFormValid || valid;
        }

        return isFormValid;
    }

    addElement = (validable: Validable): void => {
        this._validables.push(validable);
    }
}