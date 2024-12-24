import { Component, inject } from '@angular/core';
import { AppDataService, UserProfileService } from '@services/index';
import { Constants } from '@shared/constants';

@Component({
	selector: 'wsp-footer',
	imports: [],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	protected readonly constants = inject(Constants);
	protected readonly userProfileService = inject(UserProfileService);
	protected readonly appDataService = inject(AppDataService);
}
