import { AddNumbers } from "../shared/AddNumbers";


export class Apis {
    async addNumbers(req, res) {
        const { numberString } = req.query;
        if(!numberString) {
            res.status(400).json({ result: 0 })
        }
        const result = AddNumbers.prototype.addNumbers(numberString);
        res.status(200).json({ result });
    }
}