'use strict';

const FizzBuzzConfiguration = require('./configuration.js');

class FizzBuzz {
	/**
	* @constructor
	*/
	constructor(fizzBuzzConfiguration) {
		this.rules = {};
		this.loadConfiguration(fizzBuzzConfiguration);
	}

	/**
	* Loads a FizzBuzzConfiguration object to change the configuration of this class.
	* @param {FizzBuzzConfiguration}
	*/
	loadConfiguration(fizzBuzzConfiguration) {
		if (!(fizzBuzzConfiguration instanceof FizzBuzzConfiguration)) {
			fizzBuzzConfiguration = new FizzBuzzConfiguration();
		}
		this.rules = fizzBuzzConfiguration.getRules();
	}

	/**
	* Runs a number a returns the proper program value according to specified rules.
	*
	* @param {Int} number the number to get.
	* @return {String} The result of the operation.
	*/
	run(number) {
		let output = '';

		// Add a word for each rule it meets.
		for (let divisible in this.rules) {
			if (!(number % divisible)) {
				output += this.rules[divisible];
			}
		}

		// If neither...
		if (output === '') {
			output = '' + number;
		}

		// Return the result.
		return output;
	}

	/**
	* Runs the FizzBuzz game with the configuration of this class.
	*
	* @param {Int} upto The number of fizzbuzz numbers.
	*/
	go(upto) {
		// Sanity checks.
		upto = parseInt(upto) || 100;
		if (upto < 1) upto = 100;

		// Let's go!
		for (let i = 1; i <= upto; i++) {
			console.log(this.run(i));
		}
	}
}

module.exports = FizzBuzz;
