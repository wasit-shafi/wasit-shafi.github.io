import { commonEnvironment } from './environment.common';

export const environment = {
	...commonEnvironment,
	production: true,
	baseUrl: 'http://my-prod-url',
};
