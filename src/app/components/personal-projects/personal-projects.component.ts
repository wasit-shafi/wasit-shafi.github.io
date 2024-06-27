import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Constants } from '@shared';
import { UserProfileService } from '@services';

@Component({
	selector: 'app-personal-projects',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './personal-projects.component.html',
	styleUrl: './personal-projects.component.scss',
})
export class PersonalProjectsComponent {
	constants = inject(Constants);
	userProfileService = inject(UserProfileService);
}
