import Person from './person';

// A developer is not your regular person ;)
class Developer extends Person {
	constructor(name, age, language) {
		super(name, age);

		this.language = language;
	}

	loves() {
		return `I just love ${this.language}!`;
	}
}

export default Developer;
