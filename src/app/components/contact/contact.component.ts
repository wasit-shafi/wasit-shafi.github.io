import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { Constants } from '@shared';

import { navigatorUtils } from '@utils';

import { UserProfileService } from '@services';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
})
export class ContactComponent {
	constants = inject(Constants);
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
