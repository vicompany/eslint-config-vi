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
			return `Whooohoo, where's the ${config.drinks[0]}?!?!`;
		}

		return Person.bummer();
	}

	static bummer() {
		return 'Bummer, dude!';
	}

	get isAllowedToDrink() {
		return this.age >= config['drinking-age'];
	}
}

export default Person;
