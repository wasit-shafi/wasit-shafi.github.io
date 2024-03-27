import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	constructor(public userProfileService: UserProfileService) {}
}
