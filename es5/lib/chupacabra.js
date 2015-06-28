"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UUID = require("uuid-1345");
var crypto = require("crypto");

var Crypto = (function () {
	function Crypto() {
		_classCallCheck(this, Crypto);
	}

	_createClass(Crypto, null, [{
		key: "getUUID",
		value: function getUUID() {
			return UUID.v4fast();
		}
	}, {
		key: "hash",
		value: function hash(value) {
			var shasum = crypto.createHash("sha1");
			shasum.update(value);
			return shasum.digest("hex");
		}
	}]);

	return Crypto;
})();

exports["default"] = Crypto;
module.exports = exports["default"];