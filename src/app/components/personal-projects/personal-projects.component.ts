import { CommonModule } from '@angular/common';
import { Component, inject, effect } from '@angular/core';

import { Constants } from '@shared/';
import { AppDataService, UserProfileService } from '@services/';
import { IPersonalProjects } from '@models/';

@Component({
	selector: 'wsp-personal-projects',
	imports: [CommonModule],
	templateUrl: './personal-projects.component.html',
	styleUrl: './personal-projects.component.scss',
})
export class PersonalProjectsComponent {
	public readonly constants = inject(Constants);
	public readonly userProfileService = inject(UserProfileService);
	public personalProjectsData!: IPersonalProjects[];
	public readonly appDataService = inject(AppDataService);

	constructor() {
		effect(() => {
			this.personalProjectsData =
				this.userProfileService.portfolioData()[
					this.constants.languageCodes[this.appDataService.currentLanguage()]
				].personalProjects;
		});
	}
}
