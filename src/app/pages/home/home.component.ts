import { Component } from '@angular/core';

import { environment } from '@environments/environment';

import {
	AboutComponent,
	ContactComponent,
	EducationComponent,
	PersonalProjectsComponent,
	SkillsComponent,
	WorkExperiencesComponent,
} from '@components';

@Component({
	selector: 'app-home',
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
	public readonly environment = environment;
}
