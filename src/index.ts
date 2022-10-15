import { Animal } from './classes/Animal';
import { Cat } from './classes/Cat';
import { Dog } from './classes/Dog';

console.clear();

function randomNumber(min = 0, max = 1): number {
	return Math.round(Math.random() * (max - min)) + min;
}

function randomString(): string {
	return (Math.random() + 1).toString(36).substring(7);
}
/**
 *
 */
const cat1 = new Cat('Tom', 100, 10, 10);
const dog1 = new Dog('Jek', 100, 10, 10);
const myList: Animal[] = [];
console.log(myList);
console.log(dog1);

let n = 1;

do {
	// myList.push(new Cat(`Cat_${randomString()}`, randomNumber(50, 100), 10, 10));
	n++;
} while (n <= 5);
// console.log(cat1);
for (let i = 1; i <= 5; i++) {
	myList.push(
		new Cat(
			`Cat_${randomString()}`,
			randomNumber(50, 100),
			(cat1._attack = randomNumber(10, 20)),
			randomNumber(50, 75),
		),
	);

	dog1._hp = dog1._hp - cat1._attack;


}

console.log(myList);
console.log(dog1);
