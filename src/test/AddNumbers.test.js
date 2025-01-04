import { Apis } from "../controller";



describe("addNumbers", () => {
    const req = { query: { numberString: "" } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    test("function should return result 0 if empty string passed", async () => {
        await Apis.prototype.addNumbers(req, res);
        expect(res.json).toHaveBeenCalledWith({
            result: 0
        });
    });

    test("function should return 400 response if empty string passed", async () => {
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const req = { query: { numberString: "" } };
        await Apis.prototype.addNumbers(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
    });

    test('returns the number for a single number string', async () => {
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const req = { query: { numberString: "1" } };
        await Apis.prototype.addNumbers(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            result: 1
        });
    });

    test('returns the number for a comma seperated number string', async () => {
        const req = { query: { numberString: "1,5" } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        await Apis.prototype.addNumbers(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            result: 6
        });
    });

    test('returns the number for a comma seperated number string', async () => {
        const req = { query: { numberString: "1\n2,3" } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        await Apis.prototype.addNumbers(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            result: 6
        });
    });

    test('supports different delimiters', async () => {
        const req = { query: { numberString: "//;\n1;2" } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        await Apis.prototype.addNumbers(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            result: 3
        });
    });

});