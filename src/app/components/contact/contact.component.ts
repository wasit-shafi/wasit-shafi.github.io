import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { IContact } from '@models/portfolio.interface';
import { AppDataService, UserProfileService } from '@services/';
import { Constants } from '@shared/';
import { navigatorUtils } from '@utils/';

@Component({
	selector: 'wsp-contact',
	imports: [CommonModule],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
})
export class ContactComponent {
	protected readonly constants = inject(Constants);
	protected readonly appDataService = inject(AppDataService);
	protected readonly userProfileService = inject(UserProfileService);
	protected readonly DEFAULT_ICON_WIDTH_IN_PX = 36;

	protected contactData: IContact =
		this.userProfileService.contactDetailsInitialState;

	constructor() {
		effect(() => {
			this.contactData =
				this.userProfileService.portfolioData()[
					this.constants.languageCodes[this.appDataService.currentLanguage()]
				].contactDetails;
		});
	}

	protected handleCopyEmailToClipboard(emailId: string = ''): void {
		navigatorUtils.handleCopyTextToClipboard(emailId);
	}
}
