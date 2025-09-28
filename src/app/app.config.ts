import { provideLottieOptions } from 'ngx-lottie';

import { isPlatformBrowser } from '@angular/common';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, inject, PLATFORM_ID, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from '@environments/';
import { Constants } from '@shared/';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideAppInitializer(() => {
			const constants = inject(Constants);
			const http = inject(HttpClient);
			const platformId = inject(PLATFORM_ID);

			if (isPlatformBrowser(platformId)) {
				// TODO(BUG): Currently the get request for fetching the IP info is failing on edge desktop browser (working on chrome, firefox, safari), Review it later

				http.get(constants.IPINFO_ENDPOINT).subscribe({
					next: (response) => {
						http
							.post(
								`${environment.baseUrl}/${constants.API_PREFIX['API_V1']}/visitor-alert`,
								{
									ipInfoFromClient: response,
								}
							)
							.subscribe();
					},
					error: (error) => {
						console.log('Error while fetching ipInfo :: ', error);
						http
							.post(
								`${environment.baseUrl}/${constants.API_PREFIX['API_V1']}/visitor-alert`,
								{
									ipInfoFromClient: {
										message: 'Unable to fetch IP Info from client',
									},
								}
							)
							.subscribe();
					},
					complete: () => {},
				});
			}
		}),
		provideRouter(routes),
		provideHttpClient(withFetch()),
		Constants,
		provideLottieOptions({
			player: () => import('lottie-web'), // lazy loading
		}),
	],
};
