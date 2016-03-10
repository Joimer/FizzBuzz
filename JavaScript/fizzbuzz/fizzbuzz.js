'use strict';

const FizzBuzzConfiguration = require('./configuration.js');

class FizzBuzz {
	/**
	* @constructor
	*/
	constructor(fizzBuzzConfiguration) {
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
		this.fizzNumber = fizzBuzzConfiguration.getFizzNumber() || 3;
		this.buzzNumber = fizzBuzzConfiguration.getBuzzNumber() || 5;
		this.fizzWord = fizzBuzzConfiguration.getFizzWord() || 'Fizz';
		this.buzzWord = fizzBuzzConfiguration.getBuzzWord() || 'Buzz';
	}

	/**
	* Runs a number a returns the proper program value.
	*
	* @param {Int} number the number to get.
	* @return {String} The result of the operation.
	*/
	run(number) {
		let output = '';

		// Check the fizz number.
		if (!(number % this.fizzNumber)) {
			output = this.fizzWord;
		}

		// Now check the buzz number, which gets concatenated.
		if (!(number % this.buzzNumber)) {
			output += this.buzzWord;
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
