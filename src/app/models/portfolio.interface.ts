// Root Portfolio Data Interface

export interface IPortfolio {
	contactDetails: IContact;
	educationDetails: IEducation[];
	personalProjects: IPersonalProjects[];
	skills: ISkills[];
	workExperience: IWorkExperience[];
}
// Work Experience

interface IWorkExperience {
	companyDetails: ICompanyDetails;
	id: string;
	isCurrentlyWorking: boolean;
	role: string;
	startDate: string;
	endDate?: string;
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

interface ISkills {
	id: string;
	skillName: string;
}
// Personal Projects

interface IPersonalProjects {
	id: string;
	deployment: IDeployment;
	projectFeatures: IProjectFeatures[];
	projectTitle: string;
	sourceCodeUrl: ISourceCodeUrl[];
}

interface IDeployment {
	linkText: string;
	url: string;
}

interface IProjectFeatures {
	description: string;
	id: string;
}

interface ISourceCodeUrl {
	linkText: string;
	url: string;
}

// Education

interface IEducation {
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

interface IContact {
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

export { ISkills, IContact, IPersonalProjects, IEducation, IWorkExperience };
