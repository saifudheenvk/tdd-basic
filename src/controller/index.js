import { AddNumbers } from "../addNumbers";


export class Apis {
    async addNumbers(req, res) {
        const { numberString } = req.query;
        const result = AddNumbers.prototype.addNumbers(numberString);
        res.json({ result });
    }
}