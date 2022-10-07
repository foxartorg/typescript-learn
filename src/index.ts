import { Animal } from './classes/Animal';
import { Cat } from './classes/Cat';

console.clear();

function randomNumber(min = 0, max = 1): number {
	return Math.round(Math.random() * (max - min)) + min;
}

function randomString(): string {
	return (Math.random() + 1).toString(36).substring(7);
}

const cat1 = new Cat('Tom', 100, 10, 10);
const myList: Animal[] = [];
console.log(myList);
let n = 1;
do {
	// myList.push(new Cat(`Cat_${randomString()}`, randomNumber(50, 100), 10, 10));
	n++;
} while (n <= 5);
// console.log(cat1);
/**
 *
 */
for (let i = 1; i <= 5; i++) {
	myList.push(new Cat(`Cat_${randomString()}`, randomNumber(50, 100), randomNumber(10, 20), randomNumber(50, 75)));
}
console.log(myList);
