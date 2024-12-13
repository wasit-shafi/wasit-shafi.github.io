import { DOCUMENT } from '@angular/common';
import {
	Inject,
	Injectable,
	WritableSignal,
	inject,
	signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';

import { Constants } from '@app/shared';

import { environment } from '@environments/';

@Injectable({
	providedIn: 'root',
})
export class AppDataService {
	public readonly meta = inject(Meta);
	public readonly constants = inject(Constants);

	// by default light theme is enabled, should be private don't expose it
	public isDarkCurrentTheme: WritableSignal<boolean> = signal(false);
	public readonly currentLanguage: WritableSignal<number> = signal(-1);
	private readonly http = inject(HttpClient);
	public readonly staticData: WritableSignal<any> = signal({});

	constructor(@Inject(DOCUMENT) private document: Document) {
		this.initializeApp();
	}

	private initializeApp(): void {
		this.initializeTheme();
		this.initializeLanguage();
		this.initializeStaticData();
	}

	private initializeTheme(): void {
		const currentTheme = Number(localStorage.getItem('currentTheme'));

		if (!currentTheme || currentTheme == this.constants.themes.LIGHT) {
			localStorage.setItem('currentTheme', `${this.constants.themes.LIGHT}`);
		} else if (currentTheme == this.constants.themes.DARK) {
			this.isDarkCurrentTheme.set(true);
			document.body.classList.add('dark');
		}
	}

	public toggleCurrentThemeMode(): void {
		this.isDarkCurrentTheme.set(!this.isDarkCurrentTheme());

		if (this.isDarkCurrentTheme()) {
			document.body.classList.add('dark');
			localStorage.setItem('currentTheme', `${this.constants.themes.DARK}`);
		} else {
			document.body.classList.remove('dark');
			localStorage.setItem('currentTheme', `${this.constants.themes.LIGHT}`);
		}
	}

	private initializeLanguage(): void {
		this.currentLanguage.set(
			Number(localStorage.getItem('currentLanguage')) ||
				this.constants.languages.ENGLISH
		);

		this.updateLanguage();
	}

	public toggleLanguage(): void {
		if (this.currentLanguage() === this.constants.languages.ARABIC) {
			this.currentLanguage.set(this.constants.languages.ENGLISH);
		} else {
			this.currentLanguage.set(this.constants.languages.ARABIC);
		}

		this.updateLanguage();
	}

	private updateLanguage(): void {
		if (this.currentLanguage() === this.constants.languages.ARABIC) {
			this.document.documentElement.lang = 'ar';
			this.document.documentElement.dir = 'rtl';
			localStorage.setItem(
				'currentLanguage',
				`${this.constants.languages.ARABIC}`
			);
		} else {
			this.document.documentElement.lang = 'en';
			this.document.documentElement.dir = 'ltr';
			localStorage.setItem(
				'currentLanguage',
				`${this.constants.languages.ENGLISH}`
			);
		}
	}

	private initializeStaticData(): void {
		this.http.get(this.constants.STATIC_DATA_URL).subscribe({
			next: (response) => {
				this.staticData.set(response);
			},
		});
	}

	get isProduction(): boolean {
		return environment.production;
	}

	// NOTE: added isDevelopment function as sometimes is more readable instead of using !isProduction() or !environment.production
	get isDevelopment(): boolean {
		return !environment.production;
	}
}
