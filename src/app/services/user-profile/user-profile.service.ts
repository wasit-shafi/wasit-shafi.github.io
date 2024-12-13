import { Injectable, WritableSignal, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

import { Constants } from '@shared/';
import { IPortfolio, IPortfolioData } from '@models/portfolio.interface';

@Injectable({
	providedIn: 'root',
})
export class UserProfileService {
	public readonly constants = inject(Constants);
	public readonly http = inject(HttpClient);
	public readonly contactDetailsInitialState = {
		codingAndSocialProfiles: [],
		emailId: {
			id: '',
			titleText: '',
			linkText: '',
			linkUrl: '',
		},
		phone: {
			id: '',
			titleText: '',
			linkText: '',
			linkUrl: '',
		},
	};

	private readonly portfolio: IPortfolio = {
		about: {
			greeting: '',
			summary: [],
		},
		contactDetails: this.contactDetailsInitialState,
		educationDetails: [],
		personalProjects: [],
		skills: [],
		workExperience: [],
	};

	private readonly initialState: IPortfolioData = {
		ar: this.portfolio,
		en: this.portfolio,
	};

	public portfolioData: WritableSignal<IPortfolioData> = signal(
		this.initialState
	);

	constructor() {
		forkJoin([
			this.getPortfolioData(this.constants.PORTFOLIO_DATA_AR_URL),
			this.getPortfolioData(this.constants.PORTFOLIO_DATA_EN_URL),
		]).subscribe((response) => {
			this.portfolioData.set({ ar: response[0], en: response[1] });
		});
	}

	private getPortfolioData(url: string): Observable<IPortfolio> {
		return this.http.get<IPortfolio>(url);
	}
}
