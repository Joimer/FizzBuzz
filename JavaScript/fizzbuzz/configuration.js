'use strict';

/**
* Configuration for the Fizz Buzz Enterprise Edition™ class.
*
* @class FizzBuzzConfiguration
*/
class FizzBuzzConfiguration {

	/**
	* Creates a instance of FizzBuzzConfiguration.
	*
	* @constructor
	* @return {FizzBuzzConfiguration}
	*/
	constructor() {
		// The default configuration values for this class.
		this.rules = {
			3: 'Fizz',
			5: 'Buzz'
		};
	}

	getRules() {
		return this.rules;
	}

	addRule(number, word) {
		this.rules[number] = word;
	}

	eraseAllRules() {
		this.rules = {};
	}
}

module.exports = FizzBuzzConfiguration;
