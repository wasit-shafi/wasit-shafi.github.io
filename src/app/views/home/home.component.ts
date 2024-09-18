import { Component, inject } from '@angular/core';

import { AppDataService } from '@services/';

import {
	AboutComponent,
	ContactComponent,
	EducationComponent,
	PersonalProjectsComponent,
	SkillsComponent,
	WorkExperiencesComponent,
} from '@components/';

@Component({
	selector: 'wsp-home',
	standalone: true,
	imports: [
		AboutComponent,
		ContactComponent,
		EducationComponent,
		PersonalProjectsComponent,
		SkillsComponent,
		WorkExperiencesComponent,
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	appDataService = inject(AppDataService);

	handleThemeModeChange(): void {
		this.appDataService.toggleCurrentThemeMode();
	}
}
