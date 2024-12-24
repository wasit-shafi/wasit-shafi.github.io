import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { IWorkExperience } from '@models/';
import { AppDataService, UserProfileService } from '@services/';
import { Constants } from '@shared/';

@Component({
	selector: 'wsp-work-experiences',
	imports: [CommonModule],
	templateUrl: './work-experiences.component.html',
	styleUrl: './work-experiences.component.scss',
})
export class WorkExperiencesComponent {
	protected readonly constants = inject(Constants);
	protected readonly userProfileService = inject(UserProfileService);
	protected readonly appDataService = inject(AppDataService);

	protected workExperiencesData!: IWorkExperience[];

	constructor() {
		effect(() => {
			this.workExperiencesData =
				this.userProfileService.portfolioData()[
					this.constants.languageCodes[this.appDataService.currentLanguage()]
				].workExperience;
		});
	}
}
