import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Constants } from '@shared/';

import { UserProfileService } from '@services/';

@Component({
	selector: 'app-about',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss',
})
export class AboutComponent {
	public constants = inject(Constants);
	userProfileService = inject(UserProfileService);
}
