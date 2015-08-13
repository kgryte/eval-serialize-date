'use strict';

// MODULES //

var isDate = require( 'validate.io-strict-date' ),
	toStr = require( './serialize.js' );


// SERIALIZE //

/**
* FUNCTION: serialize( value )
*	Serializes a Date object for dynamic code evaluation.
*
* @param {Date} value - Date object
* @returns {String} serialized value
*/
function serialize( value ) {
	if ( !isDate( value ) ) {
		throw new TypeError( 'invalid input value. Must provide a Date object. Value: `' + value + '`.' );
	}
	return toStr( value );
} // end FUNCTION serialize()


// EXPORTS //

module.exports = serialize;
module.exports.raw = toStr;
