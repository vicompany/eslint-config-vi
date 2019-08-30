import answer from './answer';
import Person from './person';
import Developer from './developer';

const john = new Person('John Resig', 32);
const doug = new Developer('Douglas Crockford', 61, 'JavaScript');

const people = {
	john,
	doug,
	'john-doe': new Person('John Doe', 80),
};

// Switch cases, fall through and indenting
switch (doug.language) {
	case 'JavaScript':
	// Falls through
	case 'Processing':
		john.party();
		break;
	default:
		john.bummer();
}

// Arrow functions
setTimeout(() => {
	people.doug.loves();
}, 500);

document.body.addEventListener('click', (e) => {
	document.body.innerText = answer;
});

// Rest params and spread operator
function greet(say, ...users) {
	users.forEach(u => say + u.name); // Arrow parens are optional when there are no braces
}

greet('Hi ', john, doug);

greet(
	'Yo ',
	john,
	doug, // trailing commas in function paramater lists
);

const numbers = [1, 5, 8, 3, 2, 7];

Math.max(...numbers);

// Ternary operators
const t1 = john.age === 32 ? 'yes' : 'no';
const t2 = doug.age === 61
	? 'yes, but I am not sure'
	: 'no, definitely not';

// Test for the rules 'no-confusing-arrow' and 'no-extra-parens':
// http://eslint.org/docs/rules/no-extra-parens
// http://eslint.org/docs/rules/no-confusing-arrow
const t3 = x => (x ? 'yes' : 'no');

// Test for the rules 'no-return-assign' and 'no-extra-parens'
// https://eslint.org/docs/rules/no-return-assign
// http://eslint.org/docs/rules/no-extra-parens
[1, 2, 3].reduce((sum, i) => (sum += i), 0);

greet(t1);
greet(t2);
greet(t3);

// Object rest/spread properties
const a = { a: 1 };
const b = { b: true };
const c = { ...a, ...b };

// eslint-disable-next-line no-console
console.log('c', c);

// Test for the rule 'prefer-named-capture-group'
// https://eslint.org/docs/rules/prefer-named-capture-group
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const { groups: { year, month, day } } = pattern.exec('2017-01-25');

// eslint-disable-next-line no-console
console.log('date', year, month, day);

// Dynamic imports
import('./answer.js')
	.then(r => console.log(`The answer is: ${r()}`)); // eslint-disable-line no-console

// BigInt
// eslint-disable-next-line no-console
console.log(typeof 123n === 'bigint');
