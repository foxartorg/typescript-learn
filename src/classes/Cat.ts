import { Animal } from './Animal';

export class Cat extends Animal {
	public get voice(): string {
		return 'meow';
	}
}
