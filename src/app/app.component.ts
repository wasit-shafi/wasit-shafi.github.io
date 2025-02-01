import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@components/';
import { AppDataService, WebBrowserService } from '@services/';
import { Constants } from '@shared/constants';

@Component({
	selector: 'wsp-root',
	imports: [
		RouterOutlet,
		HeaderComponent,
		FooterComponent,
		NgClass,
		NgOptimizedImage,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	protected readonly appDataService = inject(AppDataService);
	protected readonly constants = inject(Constants);
	protected readonly webBrowser = inject(WebBrowserService);
}
