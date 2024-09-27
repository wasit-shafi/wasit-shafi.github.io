import { Injectable, WritableSignal, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Constants } from '@shared/';
import { IPortfolio } from '@models/portfolio.interface';

@Injectable({
	providedIn: 'root',
})
export class UserProfileService {
	constants = inject(Constants);
	private http = inject(HttpClient);
	public readonly contactDetailsInitialState = {
		codingAndSocialProfiles: [],
		emailId: {
			id: '',
			linkText: '',
			linkURL: '',
		},
		phone: {
			id: '',
			linkText: '',
			linkURL: '',
		},
	};
	private readonly initialState: IPortfolio = {
		contactDetails: this.contactDetailsInitialState,
		educationDetails: [],
		personalProjects: [],
		skills: [],
		workExperience: [],
	};

	public portfolioData: WritableSignal<IPortfolio> = signal(this.initialState);

	constructor() {
		this.getPortfolioData(this.constants.PORTFOLIO_DATA_URL).subscribe(
			(response) => {
				this.portfolioData.set(response);
			}
		);
	}

	private getPortfolioData(url: string): Observable<IPortfolio> {
		return this.http.get<IPortfolio>(url);
	}
}
