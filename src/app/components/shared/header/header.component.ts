import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { environment } from '@environments/';
import { AppDataService } from '@services/index';
import { Constants } from '@shared/';

@Component({
	selector: 'wsp-header',
	imports: [CommonModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	protected readonly menuUlId = 'menu-ul';
	protected readonly menuTogglerId = 'menu-toggler';

	@HostListener('window:resize', ['$event'])
	onWindowResize(event: Event): void {
		const { innerWidth = 0 } = event.target as Window;

		this.handleNavbarLayoutChange({ innerWidth });
	}

	protected readonly constants = inject(Constants);
	protected readonly appDataService = inject(AppDataService);

	protected readonly environment = environment;

	protected readonly NAV_MENU_ITEMS = [
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
			visibility: true || !environment.production,
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

	protected handleNavItemClick(): void {
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

	handleNavMenuToggle(): void {
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
