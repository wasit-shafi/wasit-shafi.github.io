import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { IContact } from '@models/portfolio.interface';
import { AppDataService, UserProfileService } from '@services/';
import { Constants } from '@shared/';
import { navigatorUtils } from '@utils/';

@Component({
	selector: 'wsp-contact',
	imports: [CommonModule, NgOptimizedImage],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
})
export class ContactComponent {
	protected readonly constants = inject(Constants);
	protected readonly appDataService = inject(AppDataService);
	protected readonly userProfileService = inject(UserProfileService);
	protected readonly DEFAULT_ICON_WIDTH_IN_PX = 36;
	protected isEmailIdCopied: boolean = false;
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
		this.updateIsEmailIdCopied(true);
	}

	protected updateIsEmailIdCopied(newValue: boolean): void {
		this.isEmailIdCopied = newValue;
	}

	protected handleMouseLeaveOnCopyEmail(): void {
		this.updateIsEmailIdCopied(false); // reset on mouse leave
	}
}
