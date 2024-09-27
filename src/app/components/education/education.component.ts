import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { Constants } from '@shared/';
import { UserProfileService } from '@services/';
import { IEducation } from '@models/portfolio.interface';

@Component({
	selector: 'wsp-education',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './education.component.html',
	styleUrl: './education.component.scss',
})
export class EducationComponent {
	constants = inject(Constants);
	userProfileService = inject(UserProfileService);

	public educationData!: IEducation[];

	constructor() {
		effect(() => {
			this.educationData =
				this.userProfileService.portfolioData().educationDetails;
		});
	}
}
