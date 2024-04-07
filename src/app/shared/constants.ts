export class Constants {
	// for more info refer: https://www.youtube.com/watch?v=6M9aZzm-kEc
	// CTM: can also use Object.freeze(), instead of 'as const' but freeze() don't work with deep objects
	public homeSectionLinksId = {
		ABOUT: 'ABOUT',
		CONTACT: 'CONTACT',
		EDUCATION: 'EDUCATION',
		PERSONAL_PROJECTS: 'PERSONAL-PROJECTS',
		SKILLS: 'SKILLS',
		WORK_EXPERIENCE: 'WORK-EXPERIENCE',
	} as const;

	public PORTFOLIO_DATA_URL = '/assets/data/portfolio.json';

	public applicationCurrentTheme = {
		LIGHT: 1,
		DARK: 2,
	};
}
