export class InternetPlan {
	constructor(speed, dataLimit, price) {
		this.type = "Internet";
		this.speed = speed;
		this.dataLimit = dataLimit;
		this.price = price;
	}

	getDescription() {
		return `${this.type} Plan: ${this.speed} Mbps, ${this.dataLimit} GB za ${this.price} PLN`
	}
}
