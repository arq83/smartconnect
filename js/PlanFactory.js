/**
 * Import all available plan types
 * Each plan type represents a different service offering
 */
import { InternetPlan } from "./plans/InternetPlan.js";
import { VoicePlan } from "./plans/VoicePlan.js";
import { SMSPlan } from "./plans/SMSPlan.js";
import { FamilyPlan } from "./plans/FamilyPlan.js";

/**
 * Factory class responsible for creating different types of service plans
 * Implements the Factory Method pattern
 */
export class PlanFactory {
	/**
	 * Creates a new plan instance based on the specified type and options
	 * @param {string} type - The type of plan to create ('internet', 'voice', 'sms', 'family')
	 * @param {Object} options - Configuration options for the plan
	 * @returns {Object} An instance of the requested plan type
	 */
	static createPlan(type, options) {
		switch (type) {
			case "internet":
				return new InternetPlan(options.speed, options.dataLimit, options.price);
			case "voice":
				return new VoicePlan(options.minutes, options.price);
			case "sms":
				return new SMSPlan(options.messages, options.price);
			case "family":
				return new FamilyPlan(options.numbers, options.price);
			default:
				throw new Error("Nieznany typ planu: " + type);
		}
	}
}
