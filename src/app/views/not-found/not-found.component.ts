import { AnimationOptions, LottieComponent } from 'ngx-lottie';

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'wsp-not-found',
	imports: [RouterLink, LottieComponent],
	templateUrl: './not-found.component.html',
	styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
	public readonly lottieCustomStyles = {
		marginLeft: '65px',
	};

	public readonly lottieAnimationOptions: AnimationOptions = {
		path: 'assets/lottie/404-not-found-animation.json',
	};
}
