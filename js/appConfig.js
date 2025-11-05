/**
 * Application configuration class implementing the Singleton pattern
 * Manages global settings and promotional offers for the SmartConnect service
 */
class AppConfig {
	/**
	 * Constructor implementing Singleton pattern
	 * Ensures only one instance of AppConfig exists throughout the application
	 */
	constructor() {
		if (AppConfig.instance) {
			return AppConfig.instance;
		}

		// Initialize default configuration values
		this.currency = "PLN";
		this.currentPromotion = "Black Week 20% off";
		this.operatorName = "SmartConnect";

		AppConfig.instance = this;
	}

	/**
	 * Sets the current promotion
	 * @param {string} promo - The promotion text to set
	 */
	setPromotion(promo) {
		this.currentPromotion = promo;
	}

	/**
	 * Returns the current active promotion
	 * @returns {string} The current promotion text
	 */
	getPromotion() {
		return this.currentPromotion;
	}

	/**
	 * Returns the currency used in the application
	 * @returns {string} The currency code (e.g., "PLN")
	 */
	getCurrency() {
		return this.currency;
	}

	/**
	 * Toggles the promotion state
	 * @param {boolean} isActive - Whether to enable or disable the promotion
	 */
	togglePromotion(isActive) {
		if (isActive) {
			this.setPromotion("Black Week 20% off");
		} else {
			this.setPromotion("Brak Promocji");
		}
	}
}

// Create and export a singleton instance
export default new AppConfig();
