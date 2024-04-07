import { Injectable, WritableSignal, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Constants } from '@shared';

@Injectable({
	providedIn: 'root',
})
export class UserProfileService {
	constants = inject(Constants);

	// TODO: update 'any' to 'interface' for portfolio data

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public portfolioData: WritableSignal<any> = signal({});

	constructor(private httpClient: HttpClient) {
		// TODO: remove mock json file and integrate data from mongoDb
		this.getData(this?.constants?.PORTFOLIO_DATA_URL).subscribe((data) => {
			this.portfolioData.set(data);
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private getData(url: string): Observable<any> {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return this.httpClient.get<any>(url);
	}
}
