

export class AddNumbers {
    addNumbers(numberString) {
        if(!numberString) {
            throw new Error("numberString is required");
        }
        const parsedNumbers = this.parseNumberString(numberString);
        const total = parsedNumbers.reduce((total, number) => total + parseInt(number), 0);
        console.log(total);
        return total;
    }

    parseNumberString(numberString) {
        return numberString.split(",");
    }
}