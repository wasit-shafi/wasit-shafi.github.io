import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { Constants } from '@shared/';

import { navigatorUtils } from '@utils/';

import { AppDataService, UserProfileService } from '@services/';
import { IContact } from '@models/portfolio.interface';

@Component({
	selector: 'wsp-contact',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
})
export class ContactComponent {
	public readonly constants = inject(Constants);
	public readonly appDataService = inject(AppDataService);
	public readonly userProfileService = inject(UserProfileService);
	DEFAULT_ICON_WIDTH_IN_PX = 36;

	public contactData: IContact =
		this.userProfileService.contactDetailsInitialState;

	constructor() {
		effect(() => {
			this.contactData = this.userProfileService.portfolioData().contactDetails;
		});
	}

	public handleCopyEmailToClipboard(emailId: string = '') {
		navigatorUtils.handleCopyTextToClipboard(emailId);
	}
}
