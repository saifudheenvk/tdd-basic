import { AddNumbers } from "../shared/add-numbers";


export class Apis {
    async addNumbers(req, res) {
        try {
            const { numberString } = req.query;
            const result = AddNumbers.prototype.addNumbers(numberString);
            res.status(200).json({ result, message: "success" });
        } catch (error) {
            res.status(400).json({ result: 0, message: error.message });
        }
    }
}