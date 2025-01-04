const AddNumbers = require("../shared/add-numbers");


class Apis {
    async addNumbers(req, res) {
        console.log(req.query)
        const { numberString } = req.query;
        const result = AddNumbers.prototype.addNumbers(numberString);
        res.status(200).json({ result, message: "success" });
    }
}

module.exports = Apis