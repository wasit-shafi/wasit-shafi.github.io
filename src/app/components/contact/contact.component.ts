import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { UserProfileService } from '@services';
import { navigatorUtils } from '@utils';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
})
export class ContactComponent {
	userProfileService = inject(UserProfileService);

	public contactData: any;

	constructor() {
		effect(() => {
			this.contactData =
				this.userProfileService.portfolioData()?.contactDetails;
		});
	}

	public handleCopyEmailToClipboard(emailId: string = '') {
		navigatorUtils?.handleCopyTextToClipboard(emailId);
	}
}
