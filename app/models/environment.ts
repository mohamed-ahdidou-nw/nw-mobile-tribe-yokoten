import { Api } from "../services/api";

let ReactotronDev;
if (__DEV__) {
	const { Reactotron } = require("../services/reactotron");
	ReactotronDev = Reactotron;
}

/**
 * The environment is a place where services and shared dependencies between
 * models live.  They are made available to every model via dependency injection.
 */
export class Environment {
	constructor () {
		// Create each service
		if (__DEV__) {
			// Dev-only services
			this.reactotron = new ReactotronDev();
		}

		this.api = new Api();
	}

	async setup () {
		// Allow each service to setup
		if (__DEV__) {
			await this.reactotron.setup();
		}

		await this.api.setup();
	}

	/**
   * Reactotron is only available in dev.
   */
	reactotron: typeof ReactotronDev;

	/**
   * Our api.
   */
	api: Api;
}
