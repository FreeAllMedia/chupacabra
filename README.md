# Chupacabra.js [![npm version](https://img.shields.io/npm/v/chupacabra.svg)](https://www.npmjs.com/package/chupacabra) [![license type](https://img.shields.io/npm/l/chupacabra.svg)](https://github.com/FreeAllMedia/chupacabra.git/blob/master/LICENSE) [![npm downloads](https://img.shields.io/npm/dm/chupacabra.svg)](https://www.npmjs.com/package/chupacabra) ![ECMAScript 6](https://img.shields.io/badge/ECMAScript-6-red.svg)

Quality-controlled cryptographic library for ES6 and ES5.

```javascript
import Chupacabra from "chupacabra";

Chupacabra.getUUID();//returns some uuid according to the RFC
Chupacabra.hash("somestringvalue");//generates a hash using the sha1 algorithm
```

# Quality and Compatibility

[![Build Status](https://travis-ci.org/FreeAllMedia/chupacabra.png?branch=master)](https://travis-ci.org/FreeAllMedia/chupacabra) [![Code Climate](https://codeclimate.com/github/FreeAllMedia/chupacabra/badges/gpa.svg)](https://codeclimate.com/github/FreeAllMedia/chupacabra) [![Dependency Status](https://david-dm.org/FreeAllMedia/chupacabra.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/chupacabra?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/FreeAllMedia/chupacabra/dev-status.svg)](https://david-dm.org/FreeAllMedia/chupacabra?theme=shields.io#info=devDependencies)

*Every build and release is automatically tested on the following platforms:*

![node 0.12.x](https://img.shields.io/badge/node-0.12.x-brightgreen.svg) ![node 0.11.x](https://img.shields.io/badge/node-0.11.x-brightgreen.svg) ![node 0.10.x](https://img.shields.io/badge/node-0.10.x-brightgreen.svg)
![iojs 2.x.x](https://img.shields.io/badge/iojs-2.x.x-brightgreen.svg) ![iojs 1.x.x](https://img.shields.io/badge/iojs-1.x.x-brightgreen.svg)


[![Sauce Test Status](https://saucelabs.com/browser-matrix/chupacabra.svg)](https://saucelabs.com/u/chupacabra)


*If your platform is not listed above, you can test your local environment for compatibility by copying and pasting the following commands into your terminal:*

```
npm install chupacabra
cd node_modules/chupacabra
gulp test-local
```

# Installation

Copy and paste the following command into your terminal to install Chupacabra:

```
npm install chupacabra --save
```

## Import / Require

```
// ES6
import chupacabra from "chupacabra";
```

```
// ES5
var chupacabra = require("chupacabra");
```

```
// Require.js
define(["require"] , function (require) {
    var chupacabra = require("chupacabra");
});
```

# Getting Started
Chupacabra provides a set of static methods under the main class useful for crypto-related use cases.

## getUUID()
Returns a UUID according to the RFC.

## hash()
Receives the string to hash and returns a hash using the sha1 algorithm.

# How to Contribute

See something that could use improvement? Have a great feature idea? We listen!

You can submit your ideas through our [issues system](https://github.com/FreeAllMedia/chupacabra/issues), or make the modifications yourself and submit them to us in the form of a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).

We always aim to be friendly and helpful.

## Running Tests

It's easy to run the test suite locally, and *highly recommended* if you're using Chupacabra.js on a platform we aren't automatically testing for.

```
npm test
```


### SauceLabs Credentials

We've setup our tests to automatically detect whether or not you have our saucelabs credentials installed in your environment (`process.env.SAUCE_USERNAME`).

If our saucelabs credentials are not installed, the tests are setup to automatically detect all browsers you have installed on your local system, then use them to run the tests.

#### Obtaining Our SauceLabs Credentials

If you'd like to develop Chupacabra.js using SauceLabs, you need only create a new entry in our [issue tracker](https://github.com/FreeAllMedia/chupacabra/issues) asking for our SauceLabs credentials.

We'll send over all credentials specific to this project so that you can perform comprehensive cross-platform tests.
