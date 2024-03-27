import { Injectable, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserProfileService {
	// TODO: update 'any' to 'interface' for portfolio data

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public portfolioData: WritableSignal<any> = signal({});

	constructor(private httpClient: HttpClient) {
		// TODO: remove mock json file and integrate data from mongoDb

		this.getData('/assets/data/portfolio.json').subscribe((data) => {
			this.portfolioData.set(data);
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private getData(url: string): Observable<any> {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return this.httpClient.get<any>(url);
	}
}
