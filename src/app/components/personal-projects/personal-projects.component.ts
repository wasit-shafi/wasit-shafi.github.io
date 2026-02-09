import { LightgalleryModule } from 'lightgallery/angular';
import lgZoom from 'lightgallery/plugins/zoom';

import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { AppDataService, UserProfileService } from '@services/';
import { Constants } from '@shared/';

@Component({
	selector: 'wsp-personal-projects',
	imports: [CommonModule, LightgalleryModule],

	templateUrl: './personal-projects.component.html',
	styleUrl: './personal-projects.component.scss',
	encapsulation: ViewEncapsulation.None,
})
export class PersonalProjectsComponent {
	protected readonly constants = inject(Constants);
	protected readonly userProfileService = inject(UserProfileService);
	protected readonly appDataService = inject(AppDataService);

	protected readonly projectsData = {
		devToolsStudio: {
			links: [
				{
					id: '',
					label: 'Youtube Video',
					url: 'https://youtu.be/HiqfIKH9ywE',
				},
				{
					id: '',
					label: 'Frontend App',
					url: 'https://devtoolsstudio.surge.sh',
				},
				{
					id: '',
					label: 'Backend Server',
					url: 'https://dev-tools-studio-backend-git-dev.on.shiper.app',
				},
				{
					id: '',
					label: 'Architecture Diagrams',
					url: 'https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X',
				},
				{
					id: '',
					label: 'GitHub Project Board',
					url: 'https://github.com/users/wasit-shafi/projects/5/views/1',
				},
				{
					id: '',
					label: 'Source Code Repositories',
					url: 'https://github.com/wasit-shafi?tab=repositories&q=dev-tools-studio',
				},
				{
					id: '',
					label: 'Docker Images',
					url: 'https://hub.docker.com/u/wasitshafi700?search=dev-tools-studio',
				},
				{
					id: '',
					label: 'Postman Collection',
					url: 'https://www.postman.com/wasitshafi/dev-tools-studio-public-wrokspace/overview',
				},
			],
			coreTechStack: [
				{
					id: '',
					label: 'NodeJS',
				},
				{
					id: '',
					label: 'ExpressJS',
				},
				{
					id: '',
					label: 'MongoDB',
				},
				{
					id: '',
					label: 'Angular',
				},
				{
					id: '',
					label: 'Mongoose',
				},
				{
					id: '',
					label: 'NgRx',
				},
				{
					id: '',
					label: 'Typescript',
				},
				{
					id: '',
					label: 'BullMQ',
				},
				{
					id: '',
					label: 'JWT',
				},
				{
					id: '',
					label: 'Zod',
				},
				{
					id: '',
					label: 'Docker',
				},
				{
					id: '',
					label: 'AWS',
				},
				{
					id: '',
					label: 'Github Actions',
				},
				{
					id: '',
					label: 'Tailwind CSS',
				},
			],
		},
	};

	protected activeIndex: number = 0;
	protected displayCustom: boolean = false;
	protected readonly settings = {
		counter: false,
		plugins: [lgZoom],
	};

	constructor() {}

	protected imageClick(index: number): void {
		this.activeIndex = index;
		this.displayCustom = true;
	}
}
