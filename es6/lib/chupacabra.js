const UUID = require("uuid-1345");
const crypto = require("crypto");

export default class Crypto {
	static getUUID() {
		return UUID.v4fast();
	}

	static hash(value) {
		const shasum = crypto.createHash("sha1");
		shasum.update(value);
		return shasum.digest("hex");
	}
}
