"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libChupacabraJs = require("../lib/chupacabra.js");

var _libChupacabraJs2 = _interopRequireDefault(_libChupacabraJs);

//tentative module to use: https://www.npmjs.com/package/uuid-1345
describe("crypto", function () {
	describe("(static methods)", function () {
		describe(".getUUID()", function () {
			it("should get a UUID hash according to the RFC 4122 v4 (random) by default with no args", function () {
				_libChupacabraJs2["default"].getUUID().length.should.be.greaterThan(0);
			});
		});
		describe(".hash(string)", function () {
			it("should hash a string with a proper secure hash algorithm", function () {
				_libChupacabraJs2["default"].hash("somestring").length.should.be.greaterThan(0);
			});
		});
	});
});