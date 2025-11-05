export class FamilyPlan {
	constructor(numbers, price) {
		this.type = "Family";
		this.numbers = numbers;
		this.price = price;
	}

	getDescription() {
		return `${this.type} Plan: ${this.numbers} numery za ${this.price} PLN`;
	}
}
