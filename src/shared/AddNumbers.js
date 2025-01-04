

export class AddNumbers {
    addNumbers(numberString) {
        if(!numberString) {
            throw new Error("numberString is required");
        }
        const parsedNumbers = this.parseNumberString(numberString);
        console.log(parsedNumbers)
        const total = parsedNumbers.reduce((total, number) => total + parseInt(number), 0);
        return total;
    }

    parseNumberString(numberString) {
        let delimitter = /,|\n/;
        if(numberString.startsWith('//')) {
            const parts = numberString.split('\n');
            numberString = parts[1];
            delimitter = parts[0].slice(2);
        }
        return numberString.split(delimitter).filter(number => number!== '');
    }
}