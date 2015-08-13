Date Serialization
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Serializes a Date object for dynamic code evaluation.


## Installation

``` bash
$ npm install eval-serialize-date
```


## Usage

``` javascript
var serialize = require( 'eval-serialize-date' );
```

#### serialize( value )

Serializes a `Date` object for dynamic code evaluation.

``` javascript
var date = new Date();

var str = serialize( new Date() );
// returns 'new Date(<timestamp>)'

var d = eval( str );
// returns <Date>

var bool = ( date.getTime() === d.getTime() );
// returns true
```


#### serialize.raw( date )

Serializes a `Date` object without performing type checking.

``` javascript
try {
	// throws during input argument validation...
	serialize( null );
} catch ( err ) {
	console.error( err );
}

// To bypass validation...
var str = serialize.raw( new Date() );
// returns 'new Date(<timestamp>)';
```


## Examples

``` javascript
var serialize = require( 'eval-serialize-date' );

/**
* Returns a function to create a Date filled array.
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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eval-serialize-date.svg
[npm-url]: https://npmjs.org/package/eval-serialize-date

[travis-image]: http://img.shields.io/travis/kgryte/eval-serialize-date/master.svg
[travis-url]: https://travis-ci.org/kgryte/eval-serialize-date

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eval-serialize-date/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eval-serialize-date?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eval-serialize-date.svg
[dependencies-url]: https://david-dm.org/kgryte/eval-serialize-date

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eval-serialize-date.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eval-serialize-date

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eval-serialize-date.svg
[github-issues-url]: https://github.com/kgryte/eval-serialize-date/issues
