import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent, FooterComponent } from '@layouts';

import { AppDataService } from '@services';

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
