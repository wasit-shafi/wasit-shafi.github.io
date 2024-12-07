export class Constants {
	// for more info refer: https://www.youtube.com/watch?v=6M9aZzm-kEc
	// CTM: can also use Object.freeze(), instead of 'as const' but freeze() don't work with deep objects
	public readonly homeSectionLinksId = {
		ABOUT: 'about',
		CONTACT: 'contact',
		EDUCATION: 'education',
		PERSONAL_PROJECTS: 'personal-projects',
		SKILLS: 'skills',
		WORK_EXPERIENCE: 'work-experience',
	} as const;

	public readonly PORTFOLIO_DATA_AR_URL = '/assets/data/portfolio-ar.json';
	public readonly PORTFOLIO_DATA_EN_URL = '/assets/data/portfolio-en.json';

	public readonly themes = {
		LIGHT: 1,
		DARK: 2,
	} as const;

	public readonly languages = {
		ARABIC: 1,
		ENGLISH: 2,
	} as const;
}
