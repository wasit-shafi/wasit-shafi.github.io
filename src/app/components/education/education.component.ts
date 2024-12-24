import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { IEducation } from '@models/portfolio.interface';
import { AppDataService, UserProfileService } from '@services/';
import { Constants } from '@shared/';

@Component({
	selector: 'wsp-education',
	imports: [CommonModule],
	templateUrl: './education.component.html',
	styleUrl: './education.component.scss',
})
export class EducationComponent {
	protected readonly constants = inject(Constants);
	protected readonly userProfileService = inject(UserProfileService);
	protected readonly appDataService = inject(AppDataService);

	protected educationData!: IEducation[];

	constructor() {
		effect(() => {
			this.educationData =
				this.userProfileService.portfolioData()[
					this.constants.languageCodes[this.appDataService.currentLanguage()]
				].educationDetails;
		});
	}
}
