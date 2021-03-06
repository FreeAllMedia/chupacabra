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

		describe("(Hashids)", function () {
			describe(".encodeHashId", function () {
				it("should encode with numbers and a salt", function () {
					_libChupacabraJs2["default"].encodeHashId(1, 2, 3, "salt").should.be.a.String;
				});
			});

			describe(".decodeHashId", function () {
				it("should decode with numbers and a salt", function () {
					_libChupacabraJs2["default"].decodeHashId("hash", "salt").should.be.instanceOf(Array);
				});
			});

			describe("(functionality)", function () {
				it("should encode and decode correctly", function () {
					var originalValue = 129;
					var salt = "salt";
					var encodedValues = _libChupacabraJs2["default"].encodeHashId(originalValue, salt);
					var reDecodedValue = _libChupacabraJs2["default"].decodeHashId(encodedValues, salt);
					reDecodedValue.should.eql([originalValue]);
				});

				it("should encode and decode correctly many numbers as well", function () {
					var originalValues = [129, 123];
					var salt = "salt";
					var encodedValues = _libChupacabraJs2["default"].encodeHashId.apply(_libChupacabraJs2["default"], originalValues.concat([salt]));
					var reDecodedValue = _libChupacabraJs2["default"].decodeHashId(encodedValues, salt);
					reDecodedValue.should.eql(originalValues);
				});

				it("should encode and decode correctly many numbers with no salt specified", function () {
					var originalValues = [129, 123];
					var encodedValues = _libChupacabraJs2["default"].encodeHashId.apply(_libChupacabraJs2["default"], originalValues);
					var reDecodedValue = _libChupacabraJs2["default"].decodeHashId(encodedValues);
					reDecodedValue.should.eql(originalValues);
				});
			});
		});
	});
});