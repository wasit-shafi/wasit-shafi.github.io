import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-work-experiences',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './work-experiences.component.html',
	styleUrl: './work-experiences.component.scss',
})
export class WorkExperiencesComponent {
	userProfileService = inject(UserProfileService);
}
