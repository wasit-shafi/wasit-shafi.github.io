import { CommonModule } from '@angular/common';
import { Component, inject, effect } from '@angular/core';

import { Constants } from '@shared/';
import { UserProfileService } from '@services/';
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

	constructor() {
		effect(() => {
			this.personalProjectsData =
				this.userProfileService.portfolioData().personalProjects;
		});
	}
}
