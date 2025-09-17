import { Component, inject } from '@angular/core';
import {
    AboutComponent, ContactComponent, EducationComponent, PersonalProjectsComponent, SkillsComponent, StatsComponent,
    WorkExperiencesComponent
} from '@components/';
import { AppDataService } from '@services/';

@Component({
	selector: 'wsp-home',
	imports: [
		AboutComponent,
		ContactComponent,
		EducationComponent,
		PersonalProjectsComponent,
		SkillsComponent,
		WorkExperiencesComponent,
		StatsComponent,
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
