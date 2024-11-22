import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { Constants } from '@shared/';
import { UserProfileService } from '@services/';
import { IWorkExperience } from '@models/';

@Component({
	selector: 'wsp-work-experiences',
	imports: [CommonModule],
	templateUrl: './work-experiences.component.html',
	styleUrl: './work-experiences.component.scss',
})
export class WorkExperiencesComponent {
	public readonly constants = inject(Constants);
	public readonly userProfileService = inject(UserProfileService);

	public workExperiencesData!: IWorkExperience[];

	constructor() {
		effect(() => {
			this.workExperiencesData =
				this.userProfileService.portfolioData().workExperience;
		});
	}
}
