import { Injectable, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserProfileService {
	// TODO: update 'any' to 'interface' for portfolio data

	public portfolioData: WritableSignal<any> = signal({});

	constructor(private httpClient: HttpClient) {
		// TODO: remove mock json file and integrate data from mongoDb

		this.getData('/assets/data/portfolio.json').subscribe((data) => {
			this.portfolioData.set(data);
		});
	}

	private getData(url: string): Observable<any> {
		return this.httpClient.get<any>(url);
	}
}
