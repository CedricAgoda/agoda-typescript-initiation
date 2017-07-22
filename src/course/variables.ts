declare var $: any;

export default class MyVariable {
    runIt() {
        let myValue;
        let myOtherValue: any;

        let myNumber = 10;
        let myOtherNumber: number = 10;

        let myString = 'text';
        let myOtherString: string = 'Hello World!';

        let myBool = true;
        let myBoolean: boolean = false;

        let numberArray: number[] = [1, 2, 3];
        let anotherArray: Array<number> = [1, 2, 3];

        let myTuple: [number, string] = [1, 'Hello'];
        let myTupleArray: Array<[number, string]> = [[1, 'Hello'], [2, 'World!']];

        enum Language { Thai, English, French }

        let myLanguage: Language = Language.French;

        enum CustomNumberingLanguage { Thai = 66, English = 44, French = 33 };
        let myNumberLanguage: CustomNumberingLanguage = CustomNumberingLanguage.French;

    }

    useJquery() {
        $('.button').click(() => {
            // Something happens
        });
    }

    usingLet(): void {
        let x = 20;
        for (let x = 0; x < 10; x++) {
            let x = 10;
        }
        console.log(x);
    }
}