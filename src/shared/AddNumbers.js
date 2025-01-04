

export class AddNumbers {
    addNumbers(numberString) {
        const parsedNumbers = this.parseNumberString(numberString);
        const total = parsedNumbers.reduce((total, number) => total + parseInt(number), 0);
        return total;
    }

    parseNumberString(numberString) {
        return numberString.split(",");
    }
}