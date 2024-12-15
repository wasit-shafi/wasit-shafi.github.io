import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { Constants } from '@shared/';
import { UserProfileService, AppDataService } from '@services/';
import { IEducation } from '@models/portfolio.interface';

@Component({
	selector: 'wsp-education',
	imports: [CommonModule],
	templateUrl: './education.component.html',
	styleUrl: './education.component.scss',
})
export class EducationComponent {
	public readonly constants = inject(Constants);
	public readonly userProfileService = inject(UserProfileService);
	public readonly appDataService = inject(AppDataService);

	public educationData!: IEducation[];

	constructor() {
		effect(() => {
			this.educationData =
				this.userProfileService.portfolioData()[
					this.constants.languageCodes[this.appDataService.currentLanguage()]
				].educationDetails;
		});
	}
}
