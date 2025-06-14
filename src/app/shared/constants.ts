export class Constants {
	public readonly WSP: string = 'wsp-';

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
	public readonly STATIC_DATA_URL = '/assets/data/static.json';

	public readonly themes = {
		LIGHT: 1,
		DARK: 2,
	} as const;

	public readonly languages = {
		ARABIC: 1,
		ENGLISH: 2,
	};

	public readonly languageCodes = {
		[this.languages.ARABIC]: 'ar',
		[this.languages.ENGLISH]: 'en',
	} as const;

	public readonly snapshots: {
		imageSrc: string;
		subHtml: string;
	}[] = [
		{
			// snapshots/diagrams: All Architecture Diagrams image

			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749718181/dev-tools-studio/snapshots/diagrams/a27mme4fl1aung3f1ezf.png',
			// lightGallery-captions
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X">Visit: https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X</a>
        </div>`,
		},
		{
			// snapshots/diagrams: Data Modelling image
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749420146/dev-tools-studio/snapshots/diagrams/mkj39n7zl861puaa5agn.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X">Visit: https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X</a>
        </div>`,
		},
		{
			// snapshots/diagrams: request to response flow image
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749420146/dev-tools-studio/snapshots/diagrams/qkhhv2zojctsheqjjjgk.png',

			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X">Visit: https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X</a>
        </div>`,
		},
		{
			// snapshots/diagrams: Schedule Email Flow
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749717589/dev-tools-studio/snapshots/diagrams/bhya95kxuutxxdki0gp8.png',

			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X">Visit: https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X</a>
        </div>`,
		},
		{
			// snapshots/diagrams: POST:/email controller flow image
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749420147/dev-tools-studio/snapshots/diagrams/rcfpiv4bmlq5gce0jr0k.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X">Visit: https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X</a>
        </div>`,
		},
		{
			// snapshots/diagrams: Backend Architecture (Development) image
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749506955/dev-tools-studio/snapshots/diagrams/yetvsvxy7wqgoqsbhcjv.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X">Visit: https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X</a>
        </div>`,
		},
		{
			// snapshots/diagrams: Backend Architecture (Production) image
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749420145/dev-tools-studio/snapshots/diagrams/nud8eie9av2xadniq957.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X">Visit: https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X</a>
        </div>`,
		},
		{
			// snapshots/diagrams: CICD workflow image
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749786193/dev-tools-studio/snapshots/diagrams/wp00jb2zlbxyq7ufnlrr.png',

			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X">Visit: https://app.eraser.io/workspace/cwZzopjoFs0wIiPvRI8X</a>
        </div>`,
		},
		{
			// snapshots/others: Github Project Board
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749552216/dev-tools-studio/snapshots/others/pzfniwfsl0c0bpmkukmy.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://github.com/users/wasit-shafi/projects/5">Visit: https://github.com/users/wasit-shafi/projects/5</a>
        </div>`,
		},
		{
			// snapshots/cicd: All workflows
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749533434/dev-tools-studio/snapshots/cicd/rt1sxzvcfskx6ube9ber.png',

			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://github.com/wasit-shafi/dev-tools-studio-backend/actions">Visit: https://github.com/wasit-shafi/dev-tools-studio-backend/actions</a>
        </div>`,
		},
		{
			// snapshots/cicd: self hosted runner
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749533433/dev-tools-studio/snapshots/cicd/fncdodxpuerl7sm7eq0g.png',
			subHtml: '',
		},
		{
			// snapshots/cicd: github hosted runner
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749533433/dev-tools-studio/snapshots/cicd/qerfxdcjdcr4o4gyvruz.png',
			subHtml: '',
		},
		{
			// snapshots/cicd: Actions Usage Metrics
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749533433/dev-tools-studio/snapshots/cicd/qc0zru6m6nglgxqst2rb.png',
			subHtml: '',
		},
		{
			// snapshots/cicd: images on DockerHub
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749533433/dev-tools-studio/snapshots/cicd/ygabjr1nxjbk1nm3m2ov.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://hub.docker.com/repositories/wasitshafi700">Visit: https://hub.docker.com/repositories/wasitshafi700</a>
        </div>`,
		},
		{
			// snapshots/bullmq-and-redis: Redis Cloud
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749534016/dev-tools-studio/snapshots/bullmq-and-redis/wbkts17tjpcd6nqnagsy.png',
			subHtml: '',
		},
		{
			// snapshots/bullmq-and-redis: bullmq dashboard
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749534016/dev-tools-studio/snapshots/bullmq-and-redis/sczd2xggj9eje7vd3m4r.png',
			subHtml: '',
		},
		{
			// snapshots/bullmq-and-redis: email queue data
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749534017/dev-tools-studio/snapshots/bullmq-and-redis/xxowe9qfjakxrdq6vr6q.png',
			subHtml: '',
		},
		{
			// snapshots/bullmq-and-redis: redis db data
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749534017/dev-tools-studio/snapshots/bullmq-and-redis/aeukolkwtk0qm2iqqwvy.png',
			subHtml: '',
		},
		{
			// snapshots/others: MongoDB Atlas
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749533396/dev-tools-studio/snapshots/others/tijsfdbgnbyelonzzrqk.png',
			subHtml: '',
		},
		{
			// snapshots/others: EC2
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749533395/dev-tools-studio/snapshots/others/wlc8izmnmsb46xpphqos.png',

			subHtml: '',
		},
		{
			// snapshots/others: S3 - user attachments
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749533395/dev-tools-studio/snapshots/others/pddokrsla3nxxekrpmko.png',
			subHtml: '',
		},
		{
			// snapshots/others:
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749533395/dev-tools-studio/snapshots/others/yy1ybbu7c6rdemgxojne.png',
			subHtml: '',
		},
		{
			// snapshots/others: Postman API Collection image
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749533395/dev-tools-studio/snapshots/others/cblhllzhmodksplsqgdj.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="https://www.postman.com/wasitshafi/dev-tools-studio-public-wrokspace/overview">Visit: https://www.postman.com/wasitshafi/dev-tools-studio-public-wrokspace/overview</a>
        </div>`,
		},
		{
			// snapshots/website: Backend
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749553251/dev-tools-studio/snapshots/website/oawqr2qkx0n8frwejhir.png',
			// itemLink: environment.baseUrl,
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="http://3.110.46.93:3000">Visit: http://3.110.46.93:3000</a>
        </div>`,
		},
		{
			// snapshots/website: Schedule Email Screen - 1
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749552197/dev-tools-studio/snapshots/website/dkvh6jom93gryxz1jwle.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="http://3.110.46.93:4200">Visit: http://3.110.46.93:4200</a>
        </div>`,
		},
		{
			// snapshots/website: Schedule Email Screen - 2
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749552199/dev-tools-studio/snapshots/website/wehbevm95psnl0rhxjnp.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="http://3.110.46.93:4200">Visit: http://3.110.46.93:4200</a>
        </div>`,
		},
		{
			// snapshots/website: Settings Screen - 1
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749552198/dev-tools-studio/snapshots/website/homi3kre8zjjuotgp8xs.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="http://3.110.46.93:4200">Visit: http://3.110.46.93:4200</a>
        </div>`,
		},
		{
			// snapshots/website: Settings Screen - 2
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749552198/dev-tools-studio/snapshots/website/lkrpqp9dwksv67iucrx9.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="http://3.110.46.93:4200">Visit: http://3.110.46.93:4200</a>
        </div>`,
		},
		{
			// snapshots/website: Settings Screen - 3
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749552198/dev-tools-studio/snapshots/website/kzu9bkh77j4xw05lmk3o.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="http://3.110.46.93:4200">Visit: http://3.110.46.93:4200</a>
        </div>`,
		},
		{
			// snapshots/website: NrGx Store
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749552197/dev-tools-studio/snapshots/website/af1mydpnnlzweus2zxtf.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="http://3.110.46.93:4200">Visit: http://3.110.46.93:4200</a>
        </div>`,
		},
		{
			// snapshots/website: Add New Credential
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749552197/dev-tools-studio/snapshots/website/x3usgeithntlfcqokjt6.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="http://3.110.46.93:4200">Visit: http://3.110.46.93:4200</a>
        </div>`,
		},
		{
			// snapshots/website: Add New Email Template
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749552197/dev-tools-studio/snapshots/website/keewcfnprrvx3pxfmjjm.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="http://3.110.46.93:4200">Visit: http://3.110.46.93:4200</a>
        </div>`,
		},
		{
			// snapshots/website: Add New Attachment
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749552197/dev-tools-studio/snapshots/website/otqurmcswbwq3opopwxf.png',

			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="http://3.110.46.93:4200">Visit: http://3.110.46.93:4200</a>
        </div>`,
		},
		{
			// snapshots/website: Reset Password Email
			imageSrc:
				'https://res.cloudinary.com/dtlx6i2m7/image/upload/v1749554425/dev-tools-studio/snapshots/website/q8byhqmedr3pmifsx8uf.png',
			subHtml: `<div class="text-xs">
			<a class="!text-txtQuaternary bg-slate-100/90 rounded w-full p-3" target="_blank" href="http://3.110.46.93:4200">Visit: http://3.110.46.93:4200</a>
        </div>`,
		},
	];
}
