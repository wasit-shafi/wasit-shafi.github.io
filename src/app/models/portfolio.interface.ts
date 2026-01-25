export interface IPortfolioData {
	ar: IPortfolio;
	en: IPortfolio;
}

export interface IPortfolio {
	about: IAbout;
	contactDetails: IContact;
	educationDetails: IEducation[];
	skills: ISkills[];
	workExperience: IWorkExperience[];
}
// Work Experience

export interface IWorkExperience {
	companyDetails: ICompanyDetails;
	id: string;
	role: string;
	workContributions: IWorkContributions[];
	summary: string;
}

interface ICompanyDetails {
	city: string;
	companyName: string;
	companyWebsiteUrl: string;
	country: string;
}

interface IWorkContributions {
	description: string;
	id: string;
}
// Skills

export interface ISkills {
	category: string;
	skillList: ISkill[];
}

export interface ISkill {
	id: string;
	skillName: string;
}

// Education

export interface IEducation {
	completionDate: string;
	degree: string;
	id: string;
	logoAssetUrl: string;
	score: string;
	scoreType: string;
	universityLocation: string;
	universityLocationUrl: string;
	universityName: string;
	universityWebsiteUrl: string;
}
// Contact

export interface IContact {
	codingAndSocialProfiles: ICodingAndSocialProfiles[];
	emailId: IEmailOrPhone;
	phone: IEmailOrPhone;
}

interface ICodingAndSocialProfiles {
	iconLightUrl?: string;
	iconUrl: string;
	iconWidth?: string;
	id: string;
	linkUrl: string;
	titleText: string;
	isEnabled: boolean;
}
interface IEmailOrPhone {
	id: string;
	linkText: string;
	linkUrl: string;
}

interface ISummary {
	id: string;
	text: string;
	isEnabled: boolean;
}

export interface IAbout {
	greeting: string;
	summary: ISummary[];
}
