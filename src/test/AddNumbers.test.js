import { Apis } from "../controller";

const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

describe("addNumbers", () => {
    const req = { query: { numberString: "" } };
    test("function should return result 0 if empty string passed", async () => {
        await Apis.prototype.addNumbers(req, res);
        expect(res.json).toHaveBeenCalledWith({
            result: 0
        });
    });

    test("function should return 400 response if empty string passed", async () => {
        const req = { query: { numberString: "" } };
        await Apis.prototype.addNumbers(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
    });

    test('returns the number for a single number string', async () => {
        const req = { query: { numberString: "1" } };
        await Apis.prototype.addNumbers(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            result: 1
        });
    });

});