'use strict';

var AbstractError = require('./abstract')
  , d             = require('d/d')

  , isNameValid = RegExp.prototype.test.bind(/^[A-Z][a-zA-Z0-9]*Error$/)
  , create = Object.create;

module.exports = function (name) {
	var CustomError;
	if (!isNameValid(name)) {
		throw new Error(name + " is invalid name for error constructor");
	}
	CustomError = function () {
		var err = this;
		if (!(this instanceof CustomError)) {
			err = create(CustomError.prototype);
			return CustomError.apply(err, arguments);
		}
		AbstractError.apply(err, arguments);
		err.name = name;
		return err;
	};
	CustomError.prototype = create(AbstractError.prototype, {
		constructor: d(CustomError)
	});
	return CustomError;
};
