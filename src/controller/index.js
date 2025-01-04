import { AddNumbers } from "../shared/AddNumbers";


export class Apis {
    async addNumbers(req, res) {
        try {
            const { numberString } = req.query;
            const result = AddNumbers.prototype.addNumbers(numberString);
            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ result: 0 });
        }
    }
}