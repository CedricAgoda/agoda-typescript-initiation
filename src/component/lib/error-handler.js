export class ErrorHandler {
    private static ERROR: string = ' has-error has-feedback';

    setError = (element: HTMLInputElement): void => {
        let className = element.parentElement.className;
        className = className + ErrorHandler.ERROR;
        element.parentElement.className = className;
        element.addEventListener('focus', () => {
            this.removeError(element);
        });


    }

    removeError = (element: HTMLInputElement): void => {
        let className = element.parentElement.className;
        className = className.replace(ErrorHandler.ERROR, '');
        element.parentElement.className = className;
    }

}