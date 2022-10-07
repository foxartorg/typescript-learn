import { Animal } from './Animal';

export class Dog extends Animal {
	public get voice(): string {
		return 'woof';
	}
}
