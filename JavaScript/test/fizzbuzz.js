'use strict';

const assert = require('assert');
const FizzBuzz = require('../fizzbuzz/fizzbuzz.js');
const FizzBuzzConfiguration = require('../fizzbuzz/configuration.js');

describe('FizzBuzz', function () {
	let fizzBuzz = new FizzBuzz();

	it('should be 2 on 2', function () {
		assert.strictEqual(fizzBuzz.run(2), '2');
	});
	it('should be Fizz on 3', function () {
		assert.strictEqual(fizzBuzz.run(3), 'Fizz');
	});
	it('should be Buzz on 5', function () {
		assert.strictEqual(fizzBuzz.run(5), 'Buzz');
	});
	it('should be FizzBuzz on 15', function () {
		assert.strictEqual(fizzBuzz.run(15), 'FizzBuzz');
	});
});

describe('altered FizzBuzz', function () {
	let fizzBuzz = new FizzBuzz();
	let fizzBuzzConfiguration = new FizzBuzzConfiguration();
	fizzBuzzConfiguration.setFizzNumber(4);
	fizzBuzzConfiguration.setBuzzNumber(6);
	fizzBuzzConfiguration.setFizzWord('Lol');
	fizzBuzzConfiguration.setBuzzWord('Kek');
	fizzBuzz.loadConfiguration(fizzBuzzConfiguration);

	it('should be 3 on 3', function () {
		assert.strictEqual(fizzBuzz.run(3), '3');
	});
	it('should be Lol on 4', function () {
		assert.strictEqual(fizzBuzz.run(4), 'Lol');
	});
	it('should be Kek on 6', function () {
		assert.strictEqual(fizzBuzz.run(6), 'Kek');
	});
	it('should be LolKek on 12', function () {
		assert.strictEqual(fizzBuzz.run(12), 'LolKek');
	});
});
