// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './interface';

export const environment: Environment = {
	production: false,
	apiKey: 'AIzaSyAk6v7RGty4ZdnxKPzJrhSksF14bGhnY_M',
	firebaseDatabaseUrl:
		'https://angular-blog-c2cec-default-rtdb.firebaseio.com',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
