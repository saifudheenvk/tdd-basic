const StringCalculator = require("../shared/string-calculator");


class Apis {
    async addNumbers(req, res) {
        console.log(req.query)
        const { numberString } = req.query;
        const result = StringCalculator.prototype.calculateString(numberString);
        res.status(200).json({ result, message: "success" });
    }
}

module.exports = Apis