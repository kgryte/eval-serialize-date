'use strict';

/**
* FUNCTION: serialize( date )
*	Serializes a Date object for dynamic code evaluation.
*
* @param {Date} date - date object
* @returns {String} serialized value
*/
function serialize( date ) {
	return 'new Date(' + date.getTime() + ')';
} // end FUNCTION serialize()


// EXPORTS //

module.exports = serialize;
