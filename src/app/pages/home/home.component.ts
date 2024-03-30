import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { UserProfileService } from '@services';

import { AboutComponent } from '@components';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, AboutComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	userProfileService = inject(UserProfileService);
}
