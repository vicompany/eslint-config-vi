// This config is used to decide if a person is allowed to drink.
// We use 'separate-lines' for multiline comments
// Read more at https://eslint.org/docs/rules/multiline-comment-style
const config = {
	'drinks': ['beer', 'gin', 'tequila'],
	'drinking-age': 21,
};

// The following comments are in JSDoc format
// which are always allowed. See http://usejsdoc.org/

/** Class representing a person. */
class Person {
	/**
	 * Create a person.
	 * @param {string} name - The name of the person.
	 * @param {int} age - The age of the person.
	 */
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	party() {
		if (this.isAllowedToDrink) {
			return Person.cheer();
		}

		return Person.bummer();
	}

	static cheer() {
		return `Whooohoo, where's the ${config.drinks[0]}?!?!`;
	}

	static bummer() {
		return 'Bummer, dude!';
	}

	get isAllowedToDrink() {
		const { age } = this;
		const { 'drinking-age': legalAge } = config;

		return age >= legalAge;
	}
}

export default Person;
