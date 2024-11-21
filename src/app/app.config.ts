import { provideLottieOptions } from 'ngx-lottie';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Constants } from '@shared/';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(withFetch()),
		Constants,
		provideLottieOptions({
			player: () => import('lottie-web'), // lazy loading
		}),
	],
};
