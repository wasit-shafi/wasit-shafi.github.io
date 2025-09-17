import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppDataService } from '@services/';
import { Constants } from '@shared/';

@Component({
	selector: 'wsp-stats',
	imports: [CommonModule, NgOptimizedImage],
	templateUrl: './stats.component.html',
	styleUrl: './stats.component.scss',
})
export class StatsComponent {
	protected readonly constants = inject(Constants);
	protected readonly appDataService = inject(AppDataService);
	protected readonly DEFAULT_ICON_SIZE = 26;

	constructor() {}
}
