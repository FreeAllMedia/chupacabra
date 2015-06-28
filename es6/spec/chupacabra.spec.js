import crypto from "../lib/chupacabra.js";

//tentative module to use: https://www.npmjs.com/package/uuid-1345
describe("crypto", () => {
	describe("(static methods)", () => {
		describe(".getUUID()", () => {
			it("should get a UUID hash according to the RFC 4122 v4 (random) by default with no args", () => {
				crypto.getUUID().length.should.be.greaterThan(0);
			});
		});
		describe(".hash(string)", () => {
			it("should hash a string with a proper secure hash algorithm", () => {
				crypto.hash("somestring").length.should.be.greaterThan(0);
			});
		});
	});
});
