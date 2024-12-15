import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppDataService, WebBrowserService } from '@services/';

import { FooterComponent, HeaderComponent } from '@components/';
import { NgClass } from '@angular/common';

import { Constants } from '@shared/constants';

@Component({
	selector: 'wsp-root',
	imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	public readonly appDataService = inject(AppDataService);
	public readonly constants = inject(Constants);
	public readonly webBrowser = inject(WebBrowserService);
}
