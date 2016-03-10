'use strict';

const assert = require('assert');
const FizzBuzzConfiguration = require('../fizzbuzz/configuration.js');

describe('FizzBuzz configuration', function () {
	let fizzBuzzConfiguration = new FizzBuzzConfiguration();

	it('should have default Fizz number as 3', function () {
		assert.strictEqual(fizzBuzzConfiguration.getFizzNumber(), 3);
	});
	it('should have default Buzz number as 5', function () {
		assert.strictEqual(fizzBuzzConfiguration.getBuzzNumber(), 5);
	});
	it('should have default Fizz word as Fizz', function () {
		assert.strictEqual(fizzBuzzConfiguration.getFizzWord(), 'Fizz');
	});
	it('should have default Buzz word as Buzz', function () {
		assert.strictEqual(fizzBuzzConfiguration.getBuzzWord(), 'Buzz');
	});
});

describe('FizzBuzz changed configuration', function () {
	let fizzBuzzConfiguration = new FizzBuzzConfiguration();
	fizzBuzzConfiguration.setFizzNumber(4);
	fizzBuzzConfiguration.setBuzzNumber(6);
	fizzBuzzConfiguration.setFizzWord('Lol');
	fizzBuzzConfiguration.setBuzzWord('Kek');

	it('should have Fizz number as 4 if defined so', function () {
		assert.strictEqual(fizzBuzzConfiguration.getFizzNumber(), 4);
	});
	it('should have Buzz number as 6 if defined so', function () {
		assert.strictEqual(fizzBuzzConfiguration.getBuzzNumber(), 6);
	});
	it('should have Fizz word as Lol if defined so', function () {
		assert.strictEqual(fizzBuzzConfiguration.getFizzWord(), 'Lol');
	});
	it('should have Buzz word as Kek if defined so', function () {
		assert.strictEqual(fizzBuzzConfiguration.getBuzzWord(), 'Kek');
	});
});
