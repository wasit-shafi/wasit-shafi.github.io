import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppDataService } from '@services/';

import { FooterComponent, HeaderComponent } from '@components/';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	appDataService = inject(AppDataService);

	handleThemeModeChange(): void {
		this.appDataService.toggleCurrentThemeMode();
	}
}
