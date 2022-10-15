import { Dog } from './Dog';
import { Cat } from './Cat';

interface AnimalInterface {
	voice: string;
}

export abstract class Animal implements AnimalInterface {

	static readonly _hp: number;
	_attack: number;
	private readonly _defense: number;

	constructor(name: string, hp: number, attack: number, defense: number) {
		this._name = name;
		this._hp = hp;
		this._attack = attack;
		this._defense = defense;
	}

	_hp: number;
	get hp(): number {
		return this._hp;
	}

	set hp(value: number) {
		this._hp = value;
	}

	private _name: string;
	public get name(): string {
		return this._name;
	}

	public set name(name: string) {
		this._name = name;
	}

	public abstract get voice(): string;
	attack(count = 1, dog1: Dog, cat1: Cat): void {
		dog1._hp = dog1._hp - cat1._attack * count;
	}
	// abstract attack(dog1:Dog, cat1: Cat, _count = 1) void{
	// dog1._hp = dog1._hp - cat1._attack * count;
	// }

	public hello(): string {
		return (
			`${this._name} say: ${this.voice}\n` +
			`HP: ${this.hp}\n` +
			`Attack: ${this._attack}\n` +
			`Defense: ${this._defense}\n`
		);
	}


}
