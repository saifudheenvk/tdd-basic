const { BadRequestError } = require("./error-handler");


 class StringCalculator {
    calculateString(numberString) {
        if(!numberString) {
            return 0;
        }
        const {parsedNumbers, delimitter} = this.parseNumberString(numberString);
        this.validateNumber(parsedNumbers);
        const total = parsedNumbers.reduce((total, number) => {
            if(delimitter === '*') {
                return total * number;
            } else {
                return total + number
            }
        });
        return total;
    }

    parseNumberString(numberString) {
        let delimitter = /,|\n/;
        if(numberString.startsWith('//')) {
            const parts = numberString.split('\n');
            numberString = parts[1];
            delimitter = parts[0].slice(2);
        }
        return {
            delimitter,
            parsedNumbers: numberString.split(delimitter).filter(number => number!== '').map(number => parseInt(number.trim()))
        };
    }

    validateNumber(numbers) {
        const negatives = numbers.filter(num => parseInt(num) < 0);
        if(negatives.length > 0) {
            throw new BadRequestError("negative numbers not allowed: " + negatives.join(', '));
        }
    }
}

module.exports = StringCalculator