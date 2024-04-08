import { Component, inject, HostListener } from '@angular/core';

import { Constants } from '@shared';

import { environment } from '@environments/environment';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	public readonly menuUlId = 'menu-ul';
	public readonly menuTogglerId = 'menu-toggler';

	@HostListener('window:resize', ['$event'])
	onWindowResize(event: any) {
		this.handleNavbarLayoutChange(event);
	}

	public constants = inject(Constants);

	public readonly environment = environment;

	handleMenuToggle() {
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

	private handleNavbarLayoutChange(event: any): void {
		let menuUlDisplay = '';
		const menuTogglerBackgroundImage = 'assets/images/menu-icon.svg';

		const { innerWidth = 0 } = event.target;

		const menuUlNativeElement = document.getElementById(this.menuUlId);
		const menuTogglerNativeElement = document.getElementById(
			this.menuTogglerId
		);

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
}
