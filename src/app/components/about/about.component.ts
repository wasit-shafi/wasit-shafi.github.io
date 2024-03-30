import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-about',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss',
})
export class AboutComponent {
	userProfileService = inject(UserProfileService);
}
