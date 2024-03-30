import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-education',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './education.component.html',
	styleUrl: './education.component.scss',
})
export class EducationComponent {
	userProfileService = inject(UserProfileService);
}
