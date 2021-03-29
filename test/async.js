const welcome = (name, timeout = 1500) => new Promise((resolve, reject) => {
	if (timeout <= 0) {
		reject(new Error('Timeout cannot be negative!'));

		return;
	}

	setTimeout(() => resolve(`Hello, ${name}. How are you doing?`), timeout);
});

class Person {
	constructor(name, timeout = 1000) {
		this.name = name;
		this.timeout = timeout;
	}

	async greet() {
		let msg;

		try {
			msg = await welcome(this.name, this.timeout);
		} catch (err) {
			msg = err.message;
		}

		return msg;
	}
}

(async() => {
	const pete = new Person('Pete', -10);

	const [a, b] = await Promise.all([
		pete.greet(),
		welcome('John Doe'),
	]);

	// eslint-disable-next-line
	console.log(a, b); // Result: Timeout cannot be negative! Hello, John Doe. How are you doing?
})();

(async() => 42)();
