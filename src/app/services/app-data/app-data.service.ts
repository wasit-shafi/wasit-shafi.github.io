import { Injectable, inject, WritableSignal, signal } from '@angular/core';

import { Constants } from '@app/shared';

import { environment } from '@environments/';

@Injectable({
	providedIn: 'root',
})
export class AppDataService {
	public constants = inject(Constants);

	// by default light theme is enabled, should be private don't expose it
	public isDarkCurrentTheme: WritableSignal<boolean> = signal(false);

	constructor() {
		this.initializeTheme();
	}

	private initializeTheme(): void {
		// NOTE: if not found then return to null == Number(null) equals to 0

		const currentTheme = Number(localStorage.getItem('currentTheme'));

		if (currentTheme === 0) {
			localStorage.setItem(
				'currentTheme',
				`${this.constants.applicationCurrentTheme.LIGHT}`
			);
		} else if (currentTheme == this.constants.applicationCurrentTheme.DARK) {
			this.isDarkCurrentTheme.set(true);
			document.body.classList.add('dark');
		}
	}

	public toggleCurrentThemeMode(): void {
		this.isDarkCurrentTheme.set(!this.isDarkCurrentTheme());

		if (this.isDarkCurrentTheme()) {
			document.body.classList.add('dark');
			localStorage.setItem(
				'currentTheme',
				`${this.constants.applicationCurrentTheme.DARK}`
			);
		} else {
			document.body.classList.remove('dark');
			localStorage.setItem(
				'currentTheme',
				`${this.constants.applicationCurrentTheme.LIGHT}`
			);
		}
	}

	// get isDarkThemeEnabled(): boolean {
	// 	return this.isDarkCurrentTheme();
	// }

	get isProduction(): boolean {
		return environment.production;
	}

	// NOTE: added isDevelopment function as sometimes is more readable instead of using !isProduction() or !environment.production
	get isDevelopment(): boolean {
		return !environment.production;
	}
}
