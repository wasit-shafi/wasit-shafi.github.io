import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppDataService } from '@services/';

import { FooterComponent, HeaderComponent } from '@components/';

@Component({
	selector: 'wsp-root',
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	public readonly appDataService = inject(AppDataService);

	handleThemeModeChange(): void {
		this.appDataService.toggleCurrentThemeMode();
	}
}
