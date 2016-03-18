'use strict';

const assert = require('assert');
const FizzBuzzConfiguration = require('../fizzbuzz/configuration.js');

describe('FizzBuzz configuration', function () {
	let fizzBuzzConfiguration = new FizzBuzzConfiguration();

	it('should have default Fizz number as 3', function () {
		assert.strictEqual(fizzBuzzConfiguration.getRules()[3], 'Fizz');
	});
	it('should have default Buzz number as 5', function () {
		assert.strictEqual(fizzBuzzConfiguration.getRules()[5], 'Buzz');
	});
});

describe('FizzBuzz changed configuration', function () {
	let fizzBuzzConfiguration = new FizzBuzzConfiguration();
	fizzBuzzConfiguration.eraseAllRules();
	fizzBuzzConfiguration.addRule(4, 'Lol');
	fizzBuzzConfiguration.addRule(6, 'Kek');

	it('should have Fizz number as 4 if defined so', function () {
		assert.strictEqual(fizzBuzzConfiguration.getRules()[4], 'Lol');
	});
	it('should have Buzz number as 6 if defined so', function () {
		assert.strictEqual(fizzBuzzConfiguration.getRules()[6], 'Kek');
	});
});
