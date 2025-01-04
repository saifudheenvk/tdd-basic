import { Apis } from "..";



describe("addNumbers", () => {
    test("function should return 0 if empty string passed", async () => {
        const req = { query: { numberString: "" } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        await Apis.prototype.addNumbers(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
    });
});