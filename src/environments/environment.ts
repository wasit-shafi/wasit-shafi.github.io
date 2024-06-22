import { commonEnvironment } from './environment.common';

export const environment = {
	...commonEnvironment,
	production: true,
	apiUrl: 'http://my-prod-url',
};
