(function() {
	'use strict';

	var a = 'foo',
		b = 'bar',
		c = 'true',
		d;


	try {
		d = JSON.parse(c);
	} catch (e) {}

	return d ? a + b : c;
}());
