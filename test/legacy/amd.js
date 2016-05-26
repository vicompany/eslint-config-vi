/* eslint-env amd */

define(function() {

	'use strict';

	function Person(name) {
		this.name = name;
		this.moving = 0;
	}

	Person.prototype = {
		constructor: Person,

		talk: function() {
			return 'Hi, my name is ' + this.name;
		},

		walk: function(speed) {
			speed = speed || 5;

			this.moving = this.moving + speed;
		}
	};

	return Person;
});
