/* jshint evil:true */
'use strict';

var serialize = require( './../lib' );

/**
* FUNCTION: create( date )
*	Returns a function to create a Date filled array.
*
* @param {Date} date - date object
* @returns {Function} function to create a Date filled array
*/
function create( date ) {
	var f = '';
	f += 'return function fill( len ) {';
	f += 'var arr = new Array( len );';
	f += 'for ( var i = 0; i < len; i++ ) {';
	f += 'arr[ i ] = ' + serialize( date ) + ';';
	f += '}';
	f += 'return arr;';
	f += '}';
	return ( new Function( f ) )();
}

var fill = create( new Date() );
console.log( fill( 10 ) );
