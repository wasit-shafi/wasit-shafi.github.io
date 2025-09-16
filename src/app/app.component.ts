import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@components/';
import { AppDataService, WebBrowserService } from '@services/';
import { Constants } from '@shared/constants';

@Component({
	selector: 'wsp-root',
	imports: [
		RouterOutlet,
		HeaderComponent,
		FooterComponent,
		NgClass,
		NgOptimizedImage,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	// used to adjust the active section a bit earlier about 200px
	private readonly REDUCE_OFFSET = 200;

	protected readonly appDataService = inject(AppDataService);
	protected readonly constants = inject(Constants);
	protected readonly webBrowser = inject(WebBrowserService);

	// For more info refer below links:
	// https://codepen.io/Web_Cifar/pen/LYRBbVE
	// https://www.youtube.com/watch?v=RsPWEmfOQdU
	// https://stackoverflow.com/questions/72957343/change-active-class-in-navbar-on-scrolling-javascript-html

	@HostListener('window:scroll', ['$event'])
	onWindowScroll(event: Event) {
		const sections = document.querySelectorAll('section');
		const navLi = document.querySelectorAll('nav ul li');

		window.addEventListener('scroll', () => {
			console.clear();
			let current: string = '';

			sections.forEach((section) => {
				if (pageYOffset >= section.offsetTop - this.REDUCE_OFFSET) {
					current = section.getAttribute('id') ?? '';
				}
			});

			navLi.forEach((li) => {
				li.classList.remove('active');

				if (li.classList.contains(current)) {
					li.classList.add('active');
				}
			});
		});
	}
}
