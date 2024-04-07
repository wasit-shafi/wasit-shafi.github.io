import { commonEnvironment } from './environment.common';

export const environment = {
	...commonEnvironment,
	production: false,
	apiUrl: 'http://my-dev-url',
};
