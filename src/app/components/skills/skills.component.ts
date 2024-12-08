import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { Constants } from '@shared/';
import { UserProfileService, AppDataService } from '@services/';
import { ISkills } from '@models/';

@Component({
	selector: 'wsp-skills',
	imports: [CommonModule],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
})
export class SkillsComponent {
	public readonly constants = inject(Constants);
	public readonly userProfileService = inject(UserProfileService);
	public readonly appDataService = inject(AppDataService);

	public skillsData!: ISkills[];

	constructor() {
		effect(() => {
			this.skillsData =
				this.userProfileService.portfolioData()[
					this.constants.languageCodes[this.appDataService.currentLanguage()]
				].skills;
		});
	}
}
