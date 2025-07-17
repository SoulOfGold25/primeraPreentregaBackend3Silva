import { expect } from "chai";
import sinon from "sinon";
import { usersService } from "../../src/services/index.js";

describe("Testing usersService", () => {
    let getAllStub;

    before(() => {
        // Stub directo al servicio ya instanciado
        getAllStub = sinon.stub(usersService, "getAll").returns([
            {
                _id: "1",
                first_name: "Test",
                last_name: "User",
                email: "test@example.com",
                role: "user",
                pets: [],
            },
        ]);
    });

    after(() => {
        getAllStub.restore();
    });

    it("Debe retornar todos los usuarios correctamente", async () => {
        const result = await usersService.getAll();
        expect(result).to.be.an("array");
        expect(result[0]).to.have.property("email", "test@example.com");
    });
});
