import { commonEnvironment } from './environment.common';

export const environment = {
	...commonEnvironment,
	production: false,
	baseUrl: 'http://my-dev-url',
};
