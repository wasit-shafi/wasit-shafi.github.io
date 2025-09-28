import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
	Inject,
	inject,
	Injectable,
	signal,
	WritableSignal,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Constants } from '@app/shared';
import { environment } from '@environments/';

@Injectable({
	providedIn: 'root',
})
export class AppDataService {
	private readonly http = inject(HttpClient);
	protected readonly constants = inject(Constants);
	protected readonly meta = inject(Meta);

	// by default light theme is enabled, should be private don't expose it
	public readonly isDarkCurrentTheme: WritableSignal<boolean> = signal(false);
	public readonly currentLanguage: WritableSignal<number> = signal(-1);
	public readonly staticData: WritableSignal<any> = signal({});

	constructor(@Inject(DOCUMENT) private readonly document: Document) {
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
				this.constants.languages.ARABIC
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
