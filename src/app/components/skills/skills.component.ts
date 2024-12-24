import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { ISkills } from '@models/';
import { AppDataService, UserProfileService } from '@services/';
import { Constants } from '@shared/';

@Component({
	selector: 'wsp-skills',
	imports: [CommonModule],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
})
export class SkillsComponent {
	protected readonly constants = inject(Constants);
	protected readonly userProfileService = inject(UserProfileService);
	protected readonly appDataService = inject(AppDataService);

	protected skillsData!: ISkills[];

	constructor() {
		effect(() => {
			this.skillsData =
				this.userProfileService.portfolioData()[
					this.constants.languageCodes[this.appDataService.currentLanguage()]
				].skills;
		});
	}
}
