import { forkJoin, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IPortfolio, IPortfolioData } from '@models/portfolio.interface';
import { Constants } from '@shared/';

@Injectable({
	providedIn: 'root',
})
export class UserProfileService {
	protected readonly constants = inject(Constants);
	protected readonly http = inject(HttpClient);

	public readonly contactDetailsInitialState = {
		codingAndSocialProfiles: [],
		emailId: {
			id: '',
			linkText: '',
			linkUrl: '',
		},
		phone: {
			id: '',
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
