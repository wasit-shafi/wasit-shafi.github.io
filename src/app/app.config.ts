import { provideLottieOptions } from 'ngx-lottie';

import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Constants } from '@shared/';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		importProvidersFrom(HttpClientModule),
		Constants,
		provideLottieOptions({
			player: () => import('lottie-web'), // lazy loading
		}),
	],
};
