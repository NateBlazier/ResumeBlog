export interface Education {
	school: string;
	study: string;
	additionalInfo: string[];
	degree: string;
	year: string;
}
export interface Experience {
	company: string;
	companyStart: string;
	companyEnd: string;
	companyDescription: string;
	periods: {
		title: string;
		start: string;
		end?: string;
		achievements: string[];
		toolSets?: {
			tools?: string[];
		}[];
	}[];
}

export enum SkillType {
	Language = 'language',
	Framework = 'framework',
	Other = 'other',
	Tool = 'tool'
}

export interface ISkill {
	name: string;
	type: SkillType;
	rank: number;
	link?: string;
}

export interface ITools {
	tools: string[];
}

export interface Contact {
	name: string;
	email: string;
	phone: string;
	linkedIn: string;
	github: string;
}

export interface Resume {
	contact: Contact;
	summary: string;
	skills: ISkill[];
	experience: Experience[];
	education: Education[];
}

export const resume: Resume = {
	contact: {
		name: 'Nate Blazier',
		phone: '+1-321-252-xxxx',
		email: 'nblazier@gmail.com',
		linkedIn: '',
		github: ''
	},

	summary: `"I currently manage a team of automation test engineers. We work with all our (SCRUM) Product/Dev teams to bring automation test coverage to all our Web products. Many of the products have been developed over the past 10 - 20 years. Keywords of the products could be (multi-environment, multi-tenant, multi-language, and heavily-customizable). I am self-driven, honest, and I care about my work."`,

	skills: [
		{
			name: 'agile',
			type: SkillType.Other,
			rank: 4,
			link: 'https://en.wikipedia.org/wiki/Agile_Otherware_development'
		},
		{ name: 'angular', type: SkillType.Framework, rank: 5, link: 'https://angular.io/' },
		{ name: 'aws', type: SkillType.Tool, rank: 2, link: 'https://aws.amazon.com/' },
		{
			name: 'c#',
			type: SkillType.Language,
			rank: 5,
			link: 'https://docs.microOther.com/en-us/dotnet/csharp/'
		},
		{ name: 'c++', type: SkillType.Language, rank: 3, link: 'https://www.cplusplus.com/' },
		{
			name: 'css',
			type: SkillType.Language,
			rank: 4,
			link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
		},
		{ name: 'deno', type: SkillType.Framework, rank: 1, link: 'https://deno.land/' },
		{
			name: 'docker-compose',
			type: SkillType.Tool,
			rank: 5,
			link: 'https://docs.docker.com/compose/'
		},
		{ name: 'docker', type: SkillType.Tool, rank: 5, link: 'https://www.docker.com/' },
		{ name: 'git', type: SkillType.Tool, rank: 3, link: 'https://git-scm.com/' },
		{ name: 'github', type: SkillType.Tool, rank: 3, link: 'https://github.com/' },
		{
			name: 'html',
			type: SkillType.Language,
			rank: 4,
			link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
		},
		{
			name: 'javascript',
			type: SkillType.Language,
			rank: 4,
			link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
		},
		{
			name: 'jira',
			type: SkillType.Tool,
			rank: 3,
			link: 'https://www.atlassian.com/software/jira'
		},
		{ name: 'kubernetes', type: SkillType.Tool, rank: 1, link: 'https://kubernetes.io/' },
		{ name: 'ngrx', type: SkillType.Framework, rank: 4, link: 'https://ngrx.io/' },
		{ name: 'node', type: SkillType.Framework, rank: 3, link: 'https://nodejs.org/en/' },
		{ name: 'python', type: SkillType.Language, rank: 1, link: 'https://www.python.org/' },
		{ name: 'react', type: SkillType.Framework, rank: 3, link: 'https://reactjs.org/' },
		{ name: 'real-time', type: SkillType.Other, rank: 2, link: 'https://www.smu.edu/guildhall' },
		{ name: 'redux', type: SkillType.Framework, rank: 4, link: 'https://redux.js.org/' },
		{ name: 'shape up', type: SkillType.Other, rank: 2, link: 'https://basecamp.com/shapeup' },
		{ name: 'svelte', type: SkillType.Language, rank: 4, link: 'https://svelte.dev/' },
		{ name: 'sveltekit', type: SkillType.Framework, rank: 3, link: 'https://kit.svelte.dev/' },
		{
			name: 'typescript',
			type: SkillType.Language,
			rank: 5,
			link: 'https://www.typescriptlang.org/'
		},
		{ name: 'vscode', type: SkillType.Tool, rank: 4, link: 'https://code.visualstudio.com/' }
	].sort((a: ISkill, b: ISkill) => b.rank - a.rank),

	experience: [
		{
			company: 'Notified',
			companyStart: 'May 2008',
			companyEnd: 'Current',
			companyDescription:
				"Owned by Apollo Global - INXPO > West Corporation > Intrado > now Notified. Notified is the world's only communications cloud for events, public relations, and investor relations.",
			periods: [
				{
					title: 'Sr Software Quality Automation Test Engineer',
					start: 'January 2018',
					end: 'Current',
					achievements: [
						`Manage a core team of 5 UI and API Automation Test Engineers.`,
						`Support all other scrum teams towards automated testing coverage goals.`,
						`Help support Performance testing teams on product knowledge.`,
						`Train current manual tester to develop automation skills.`,
						`Code automation testing scripts.`,
						`Prioritize and Assign work to other teammembers.`,
						`Build Automation Frameworks.`
					],
					// tools: [`Selenium`, `RestAssured`, `Java`, `Maven`, `TestNG`, `Jenkins`]
					toolSets: [
						{
							tools: [`Selenium`, `RestAssured`, `Java`, `Maven`, `TestNG`, `Jenkins`]
						},
						{
							tools: [
								`Microsoft Playwright`,
								`SuperTest API testing`,
								`typescript`,
								`Javascript`,
								`Node`,
								`Jenkins`
							]
						}
					]
				},
				{
					title: 'Quality Assurance Engineer',
					start: 'January 2010',
					end: 'January 2018',
					achievements: [
						`Work internally to assure high build quality of INXPO’s proprietary software: Webcasting XPOCAST, INXPO Virtual Events, Social Business TV, Email Publication Suite, INXPO Mobile Applications, Mobile Browser , and Data Metrics, etc.`,
						`Involved in the software development process - monitoring and improving processes, making sure all agreed-upon processes, standards, and procedures are followed.`,
						`Work with Development, Solutions, Product Management, and Production on finding solutions to current and possible future web issues.`,
						`Manage test scenarios.`,
						`Write scripts used for training INXPO teams and INXPO clients on software uses.`,
						`Worked on custom INXPO projects with companies such as Microsoft, Cisco, Redhat, Jive, etc.`
					],
					toolSets: [
						// {
						// 	tools: []
						// }
					]
				},
				{
					title: 'Senior Associate Producer in Client Services for New Media',
					start: 'May 2008',
					end: 'February 2010',
					achievements: [
						`Assist Event Director in managing/Directing all aspects of building INXPO Virtual Environments for Businesses (Trade Shows, Job fairs, Virtual Office Buildings, Online Presentations, Social Communities.`,
						`Directly worked with clients such as: Cisco Systems(Cisco Live & Cisco Partner Space), GE Healthcare, Waters, Jack Morton, HSM, BG-Group, Global Spec, Highland Capital Partners, IDG, PennWell, IngramMicro, Informatica, Journal of Commerce, Shaker, ValleyForge, Motorcycle Industry and ATV Industry Magazine, UBM, and more...`
					],
					toolSets: [
						// {
						// 	tools: []
						// }
					]
				}
			]
		},
		{
			company: 'Orchard View Nursing Home - Princeton, IL',
			companyStart: 'February 2008',
			companyEnd: 'May 2008',
			companyDescription:
				'Started out as a volunteer. They lost most of their staff so I took a job until they could restaff.',
			periods: [
				{
					title: 'Dietary/Cook',
					start: '',
					end: '',
					achievements: [
						`Assist health-care staff in making sure residents receive nutritious good tasting food.`,
						`Following up on dietary regimens; monitoring and charting eating habits.`
					],
					toolSets: [
						// {
						// 	tools: []
						// }
					]
				}
			]
		},
		{
			company: 'Allan Odis Inc. - Chicago, IL',
			companyStart: 'January 2006',
			companyEnd: 'January 2008',
			companyDescription: 'Real-Estate Brokerage Condominium Management.',
			periods: [
				{
					title: 'Property Management Operations Assistant',
					start: '',
					end: '',
					achievements: [
						`Manage/Maintain Properties and Property Budgets.`,
						`Host Condo Association Meetings.`,
						`Involved in New Employee Hire and Training.`,
						`Handled Marketing and Administration Duties.`,
						`Maintained customers satisfaction with excellent customer service skills.`,
						`Vendor Relations.`
					],
					toolSets: [
						// {
						// 	tools: []
						// }
					]
				}
			]
		},
		{
			company: ' Carthage College - Kenosha, WI',
			companyStart: '2003',
			companyEnd: '2007',
			companyDescription: '',
			periods: [
				{
					title: 'Resident Assistant',
					start: 'August 2005',
					end: 'May 2006',
					achievements: [
						`Aided in building a community among students.`,
						`Introduced residents to outside/inside events, opportunities and programs.`,
						`Provided paths for residents to follow during attendance.`,
						`Handled issues that appeared in resident's lives.`
					],
					toolSets: [
						// {
						// 	tools: []
						// }
					]
				},
				{
					title: 'Website Administrator - Carthage College Paper “The Current”.',
					start: 'August 2005',
					end: 'May 2006',
					achievements: [
						`Maintained Website for the college paper “The Current”.`,
						`Handled The Graphic Design and Maintenance.`
					],
					toolSets: [
						// {
						// 	tools: []
						// }
					]
				}
			]
		},
		{
			company: 'Pioneer Hi-Bred International - Princeton, IL',
			companyStart: 'Summers of 1997, 1999',
			companyEnd: '2006',
			companyDescription:
				'DuPont Pioneer, formerly Pioneer Hi-Bred is the largest U.S. producer of hybrid seeds for agriculture. They are a major producer of genetically modified organisms.',
			periods: [
				{
					title: 'Crew Leader',
					start: '',
					end: '',
					achievements: [
						`Handled the business of moving groups towards company goals.`,
						`In charge of training and overseeing crews.`,
						`Readied and maintained work areas for crews.`
					],
					toolSets: [
						// {
						// 	tools: []
						// }
					]
				},
				{
					title: 'Research Assistant',
					start: '',
					end: '',
					achievements: [
						`Dealt with the experimental genetic manipulation of different corn hybrids.`,
						`Performed inoculation experiments (Organic, Chemical, Biological).`,
						`Responsible for data collection.`,
						`Prepared workspaces/experiment zones for the Scientists.`
					],
					toolSets: [
						// {
						// 	tools: []
						// }
					]
				}
			]
		}
	],

	education: [
		{
			school: 'Carthage College, Kenosha WI',
			study: 'Business Administration & Marketing',
			additionalInfo: [
				'Degrees with additional focuses - Economics, Computer Graphic Design, and IMS.',
				'Economic Educational Study Tours - East Africa, Thailand, and Japan.',
				'Awarded Carthage Business Fellowship.'
			],
			degree: 'Bachelor of Arts',
			year: '2007'
		}
	]
};
