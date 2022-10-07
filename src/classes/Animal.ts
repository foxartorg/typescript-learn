interface AnimalInterface {
	voice: string;
}

export abstract class Animal implements AnimalInterface {
	private static readonly _hp: number;
	private readonly _attack: number;
	private readonly _defense: number;

	constructor(name: string, hp: number, attack: number, defense: number) {
		this._name = name;
		this._hp = hp;
		this._attack = attack;
		this._defense = defense;
	}

	private _hp: number;
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

	attack(animal: Animal, count = 1): void {
		animal._hp = animal._hp - this._attack * count;
	}

	public hello(): string {
		return (
			`${this._name} say: ${this.voice}\n` +
			`HP: ${this.hp}\n` +
			`Attack: ${this._attack}\n` +
			`Defense: ${this._defense}\n`
		);
	}
}
