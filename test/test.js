/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	serialize = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'serialize', function tests() {

	it( 'should export a function', function test() {
		expect( serialize ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a Date object', function test() {
		var values = [
			'5',
			5,
			null,
			true,
			NaN,
			undefined,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				serialize( value );
			};
		}
	});

	it( 'should serialize a Date object', function test() {
		/* jshint evil:true */
		var date,
			out,
			v;

		date = new Date();
		v = date.getTime();
		out = serialize( date );

		assert.strictEqual( out, 'new Date(' + v + ')' );
		assert.strictEqual( date.getTime(), eval( out ).getTime() );
	});

});
