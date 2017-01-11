const config = {
	'drinks': ['beer', 'gin', 'tequila'],
	'drinking-age': 21,
};

class Person {
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
