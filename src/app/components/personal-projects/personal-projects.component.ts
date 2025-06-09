import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
	protected readonly appDataService = inject(AppDataService);

	constructor() {}
}
