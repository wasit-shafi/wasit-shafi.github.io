import { Component, inject, HostListener } from '@angular/core';

import { Constants } from '@shared/';
import { environment } from '@environments/';
import { AppDataService } from '@services/index';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'wsp-header',
	imports: [CommonModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	public readonly menuUlId = 'menu-ul';
	public readonly menuTogglerId = 'menu-toggler';

	@HostListener('window:resize', ['$event'])
	onWindowResize(event: Event) {
		const { innerWidth = 0 } = event.target as Window;

		this.handleNavbarLayoutChange({ innerWidth });
	}

	public readonly constants = inject(Constants);
	public readonly appDataService = inject(AppDataService);

	public readonly environment = environment;

	public readonly NAV_MENU_ITEMS = [
		// ABOUT

		{
			label: {
				[this.constants.languages.ARABIC]: 'عني',
				[this.constants.languages.ENGLISH]: 'About',
			},
			visibility: true,
			href: '#' + this.constants.homeSectionLinksId.ABOUT,
		},
		// EXPERIENCE

		{
			label: {
				[this.constants.languages.ARABIC]: 'خبرة في العمل',
				[this.constants.languages.ENGLISH]: 'Experience',
			},
			visibility: true,
			href: '#' + this.constants.homeSectionLinksId.WORK_EXPERIENCE,
		},
		// PROJECTS

		{
			label: {
				[this.constants.languages.ARABIC]: 'المشاريع',
				[this.constants.languages.ENGLISH]: 'Projects',
			},
			visibility: !environment.production,
			href: '#' + this.constants.homeSectionLinksId.PERSONAL_PROJECTS,
		},
		// SKILLS

		{
			label: {
				[this.constants.languages.ARABIC]: 'مهارات',
				[this.constants.languages.ENGLISH]: 'Skills',
			},
			visibility: true,
			href: '#' + this.constants.homeSectionLinksId.SKILLS,
		},
		// EDUCATION

		{
			label: {
				[this.constants.languages.ARABIC]: 'تعليم',
				[this.constants.languages.ENGLISH]: 'Education',
			},
			visibility: true,
			href: '#' + this.constants.homeSectionLinksId.EDUCATION,
		},
		// CONTACT

		{
			label: {
				[this.constants.languages.ARABIC]: 'اتصال',
				[this.constants.languages.ENGLISH]: 'Contact',
			},
			visibility: true,
			href: '#' + this.constants.homeSectionLinksId.CONTACT,
		},
	];

	public handleNavItemClick(): void {
		this.handleNavbarLayoutChange({
			innerWidth: window.innerWidth ?? 0,
		});
	}

	private handleNavbarLayoutChange(params: { innerWidth: number }): void {
		let menuUlDisplay = '';
		const menuTogglerBackgroundImage = 'assets/images/menu-icon.svg';

		const menuUlNativeElement = document.getElementById(this.menuUlId);
		const menuTogglerNativeElement = document.getElementById(
			this.menuTogglerId
		);

		const { innerWidth = 0 } = params;

		// console.log('innerWidth :: ', innerWidth, params);

		if (innerWidth && menuUlNativeElement) {
			if (innerWidth >= 413) {
				menuUlDisplay = 'flex';
			} else {
				menuUlDisplay = 'none';
			}

			menuUlNativeElement.style.setProperty(
				'display',
				menuUlDisplay,
				'important'
			);

			menuTogglerNativeElement?.style.setProperty(
				'background-image',
				'url(' + menuTogglerBackgroundImage + ')',
				'important'
			);
		}
	}

	handleNavMenuToggle() {
		let menuUlDisplay = '';
		let menuTogglerBackgroundImage = '';

		const menuUlNativeElement = document.getElementById(this.menuUlId);
		const menuTogglerNativeElement = document.getElementById(
			this.menuTogglerId
		);

		if (menuUlNativeElement) {
			if (menuUlNativeElement.style.display != 'block') {
				menuUlDisplay = 'block';
				menuTogglerBackgroundImage = 'assets/images/close-icon.svg';
			} else {
				menuUlDisplay = 'none';
				menuTogglerBackgroundImage = 'assets/images/menu-icon.svg';
			}

			menuUlNativeElement.style.setProperty(
				'display',
				menuUlDisplay,
				'important'
			);
			menuTogglerNativeElement?.style.setProperty(
				'background-image',
				'url(' + menuTogglerBackgroundImage + ')',
				'important'
			);
		}
	}
}
