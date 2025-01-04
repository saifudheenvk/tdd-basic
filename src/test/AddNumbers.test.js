import { Apis } from "../controller";



describe("addNumbers", () => {

    test("function should return result 0 if empty string passed", async () => {
        const req = { query: { numberString: "" } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        await Apis.prototype.addNumbers(req, res);
        expect(res.json).toHaveBeenCalledWith({
            result: 0
        });
    });

    test("function should return 400 response if empty string passed", async () => {
        const req = { query: { numberString: "" } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        await Apis.prototype.addNumbers(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
    });

});