(function() {

	'use strict';

	var a = 'foo',
		b = 'bar',
		c = 'true',
		d = {
			another: {
				nested: 'thing',
			},
		},
		e;

	try {
		e = JSON.parse(c);
	} catch (error) {}

	return e ? a + b : d.another.nested;

}());
