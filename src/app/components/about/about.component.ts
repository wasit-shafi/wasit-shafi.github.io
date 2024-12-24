import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { IAbout } from '@models/';
import { AppDataService, UserProfileService } from '@services/';
import { Constants } from '@shared/';

@Component({
	selector: 'wsp-about',
	imports: [CommonModule],
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss',
})
export class AboutComponent {
	protected readonly constants = inject(Constants);
	protected readonly userProfileService = inject(UserProfileService);
	protected readonly appDataService = inject(AppDataService);

	protected aboutData!: IAbout;

	constructor() {
		effect(() => {
			this.aboutData =
				this.userProfileService.portfolioData()[
					this.constants.languageCodes[this.appDataService.currentLanguage()]
				].about;
		});
	}
}
