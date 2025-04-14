export interface IPortfolioData {
	ar: IPortfolio;
	en: IPortfolio;
}

export interface IPortfolio {
	about: IAbout;
	contactDetails: IContact;
	educationDetails: IEducation[];
	personalProjects: IPersonalProjects[];
	skills: ISkills[];
	workExperience: IWorkExperience[];
}
// Work Experience

export interface IWorkExperience {
	companyDetails: ICompanyDetails;
	id: string;
	role: string;
	workContributions: IWorkContributions[];
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
	id: string;
	skillName: string;
}
// Personal Projects

export interface IPersonalProjects {
	id: string;
	deployment: IDeployment;
	projectTitle: string;
	sourceCodeUrl: ISourceCodeUrl[];
}

interface IDeployment {
	linkText: string;
	url: string;
}

interface ISourceCodeUrl {
	linkText: string;
	url: string;
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
}
interface IEmailOrPhone {
	id: string;
	linkText: string;
	linkUrl: string;
}

interface ISummary {
	id: string;
	text: string;
}

export interface IAbout {
	greeting: string;
	summary: ISummary[];
}
