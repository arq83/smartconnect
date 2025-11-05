export class SMSPlan {
	constructor(messages, price) {
		this.type = "SMS";
		this.messages = messages;
		this.price = price;
	}

	getDescription() {
		return `${this.type} Plan: ${this.messages} SMS za ${this.price} PLN`;
	}
}
