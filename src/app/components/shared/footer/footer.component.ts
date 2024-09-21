import { Component } from '@angular/core';

@Component({
	selector: 'wsp-footer',
	standalone: true,
	imports: [],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	date = new Date();
}
