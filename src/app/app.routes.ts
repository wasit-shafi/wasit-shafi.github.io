import { Routes } from '@angular/router';
import { HomeComponent, NotFoundComponent } from '@views/';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	// ** (404 not found fallback)

	{
		path: '**',
		component: NotFoundComponent,
		title: `Page Not Found`,
	},
];
