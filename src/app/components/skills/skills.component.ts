import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { Constants } from '@shared/';
import { UserProfileService } from '@services/';

@Component({
	selector: 'wsp-skills',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
})
export class SkillsComponent {
	constants = inject(Constants);
	userProfileService = inject(UserProfileService);

	public skillsData: any;

	constructor() {
		effect(() => {
			this.skillsData = this.userProfileService.portfolioData()?.skills;
		});
	}
}
