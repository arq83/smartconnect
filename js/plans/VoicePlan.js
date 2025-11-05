export class VoicePlan {
	constructor(minutes, price) {
		this.type = "Voice";
		this.minutes = minutes;
		this.price = price;
	}

	getDescription() {
		return `${this.type} Plan: ${this.minutes} minut za ${this.price} PLN`;
	}
}
