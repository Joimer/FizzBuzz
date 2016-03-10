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
		this.defaultFizzNumber = 3;
		this.defaultBuzzNumber = 5;
		this.defaultFizzWord = 'Fizz';
		this.defaultBuzzWord = 'Buzz';

		// The custom values for the configuration we may use.
		this.fizzNumber = this.defaultFizzNumber;
		this.buzzNumber = this.defaultBuzzNumber;
		this.fizzWord = this.defaultFizzWord;
		this.buzzWord = this.defaultBuzzWord;
	}

	/**
	* Sets the Fizz number. Uses the default one upon failure.
	*
	* {Int} number The number.
	*/
	setFizzNumber(number) {
		this.fizzNumber = parseInt(number) || this.defaultFizzNumber;
	}

	/**
	* Gets the current Fizz number.
	*
	* @return {Int} The Fizz number.
	*/
	getFizzNumber() {
		return this.fizzNumber || this.defaultFizzNumber;
	}

	/**
	* Sets the Buzz number. Uses the default one upon failure.
	*
	* {Int} number The number.
	*/
	setBuzzNumber(number) {
		this.buzzNumber = parseInt(number) || this.defaultBuzzNumber;
	}

	/**
	* Gets the current Buzz number.
	*
	* @return {Int} The Buzz number.
	*/
	getBuzzNumber() {
		return this.buzzNumber || this.defaultBuzzNumber;
	}

	/**
	* Sets the Fizz word. Uses the default one upon failure.
	*
	* {String} word The word.
	*/
	setFizzWord(word) {
		this.fizzWord = word.trim() || this.defaultFizzWord;
	}

	/**
	* Gets the current Fizz word.
	*
	* @return {String} The Fizz word.
	*/
	getFizzWord() {
		return this.fizzWord || this.defaultFizzWord;
	}

	/**
	* Sets the Buzz word. Uses the default one upon failure.
	*
	* {String} word The word.
	*/
	setBuzzWord(word) {
		this.buzzWord = word.trim() || this.defaultBuzzWord;
	}

	/**
	* Gets the current Buzz word.
	*
	* @return {String} The Buzz word.
	*/
	getBuzzWord() {
		return this.buzzWord || this.defaultBuzzWord;
	}
}

module.exports = FizzBuzzConfiguration;
