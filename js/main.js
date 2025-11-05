/**
 * Main application file that orchestrates the SmartConnect service plans
 * Demonstrates the use of Singleton (AppConfig) and Factory (PlanFactory) patterns
 */

// Import necessary dependencies
import AppConfig from "./appConfig.js";
import { PlanFactory } from "./PlanFactory.js";

// Initialize the AppConfig singleton instance
const appConfig = AppConfig;

// Enable promotional offers
appConfig.togglePromotion(true);
console.log(appConfig.getPromotion());

// Display operator information from singleton
console.log("Operator: ", AppConfig.operatorName);
console.log("Aktualna promocja: ", AppConfig.getPromotion());

// Create different plan types using the Factory pattern
// Each plan is created with specific configuration options
const internetPlan = PlanFactory.createPlan("internet", { speed: 300, dataLimit: 100, price: 70 });
const voicePlan = PlanFactory.createPlan("voice", { minutes: 500, price: 40 });
const smsPlan = PlanFactory.createPlan("sms", { messages: 200, price: 10 });
const familyPlan = PlanFactory.createPlan("family", { numbers: 3, price: 60 });

//Wyświetlanie


console.log(internetPlan.getDescription());
console.log(voicePlan.getDescription());
console.log(smsPlan.getDescription());
console.log(familyPlan.getDescription());




/**
 * Global function to update the UI with plan descriptions
 * Made available to the browser console by attaching to window object
 * @param {Object} params - Optional parameters (currently unused)
 */
window.Test = function (params) {
	const ele = document.getElementById('plans');

	// Update the HTML with descriptions of all plans and current promotion
	ele.innerHTML = `
    ${internetPlan.getDescription()}
    <br/>
    ${voicePlan.getDescription()}
    <br/>
    ${smsPlan.getDescription()}
    <br/>
    ${familyPlan.getDescription()}
    <br/>
    ${AppConfig.getPromotion()}
    `;
}




