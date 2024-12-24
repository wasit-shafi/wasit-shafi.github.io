import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { IPersonalProjects } from '@models/';
import { AppDataService, UserProfileService } from '@services/';
import { Constants } from '@shared/';

@Component({
	selector: 'wsp-personal-projects',
	imports: [CommonModule],
	templateUrl: './personal-projects.component.html',
	styleUrl: './personal-projects.component.scss',
})
export class PersonalProjectsComponent {
	protected readonly constants = inject(Constants);
	protected readonly userProfileService = inject(UserProfileService);
	protected personalProjectsData!: IPersonalProjects[];
	protected readonly appDataService = inject(AppDataService);

	constructor() {
		effect(() => {
			this.personalProjectsData =
				this.userProfileService.portfolioData()[
					this.constants.languageCodes[this.appDataService.currentLanguage()]
				].personalProjects;
		});
	}
}
