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
	date = new Date();
	public readonly constants = inject(Constants);
	public readonly userProfileService = inject(UserProfileService);
	public readonly appDataService = inject(AppDataService);
}
