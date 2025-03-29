import { AppDataService } from '@services/';
import { Component, inject } from '@angular/core';
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
	protected readonly appDataService = inject(AppDataService);

	handleThemeModeChange(): void {
		this.appDataService.toggleCurrentThemeMode();
	}
}
