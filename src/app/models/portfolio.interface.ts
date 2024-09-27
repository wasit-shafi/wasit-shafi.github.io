// Root Portfolio Data Interface

export interface IPortfolio {
	contactDetails: IContact;
	educationDetails: IEducation[];
	personalProjects: any;
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

interface IPersonalProjects {}
// Education

interface IEducation {
	completionDate: string;
	degree: string;
	id: string;
	logoAssetURL: string;
	score: string;
	scoreType: string;
	universityLocation: string;
	universityLocationURL: string;
	universityName: string;
	universityWebsiteURL: string;
}
// Contact

interface IContact {
	codingAndSocialProfiles: ICodingAndSocialProfiles[];
	emailId: IEmailOrPhone;
	phone: IEmailOrPhone;
}

interface ICodingAndSocialProfiles {
	iconLightURL?: string;
	iconURL: string;
	iconWidth?: string;
	id: string;
	linkURL: string;
	titleText: string;
}
interface IEmailOrPhone {
	id: string;
	linkText: string;
	linkURL: string;
}

export { ISkills, IContact, IPersonalProjects, IEducation, IWorkExperience };
