import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-skills',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
})
export class SkillsComponent {
	userProfileService = inject(UserProfileService);

	public skillsData: any;

	constructor() {
		effect(() => {
			this.skillsData = this.userProfileService.portfolioData()?.workExperience;
		});
	}
}
