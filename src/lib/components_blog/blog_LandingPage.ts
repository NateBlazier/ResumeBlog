export interface BlogCard {
	title: string;
	imagePath: string;
	link: string;
	readTime: string;
	content: string;
	tags: string[];
	postTime: string;
}

export interface BlogLandingPageData {
	title: string;
	quote: string;
	blogCard: BlogCard[];
}

export const blogLandingPageData: BlogLandingPageData = {
	title: `Help Guides`,

	quote: `"I will try to fill in the knowledge gaps to have you on your way. "`,

	blogCard: [
		{
			title: 'Selenium',
			imagePath:
				'https://blog.autify.com/static/0b1fa7c84cc543a52641d6395ad328c0/553fd/selenium-logo.png',
			link: 'https://www.youtube.com/playlist?list=PL_VFqfaSA4Umpwjo_qNYyPLAS4kqqO70K',
			readTime: '20 min',
			content: `This is a youtube playlist I created to help setup selenium projects`,
			tags: ['selenium', 'java', 'Eclipse', 'git', 'TestNG'],
			postTime: 'Jan 22, 2019, 4:11:58 PM'
		},

		{
			title: 'Microsoft Playwright',
			imagePath: 'https://miro.medium.com/max/1400/1*wrRk5Ut1L7mmbaFLGELcIw.png',
			link: 'https://www.youtube.com/playlist?list=PL_VFqfaSA4UlNiN_xbxBjgSvBTNda27oW',
			readTime: '20 min',
			content: `Youtube playlist to get started on playwright... read the documentation.`,
			tags: ['NodeJS', 'Playwright'],
			postTime: 'Jul 8, 2021, 11:11:23 PM'
		},
		{
			title: 'Git and Github',
			imagePath: 'https://miro.medium.com/max/1400/1*9PnPjPI65fGwLiMfluVLrw.jpeg',
			link: 'https://www.youtube.com/playlist?list=PL_VFqfaSA4Ul_FxDKeO44sYNdKsLpv1Fw',
			readTime: '',
			content: `Getting Started with git and github.`,
			tags: ['git', 'github', 'VSCode'],
			postTime: 'May 23, 2021, 7:11:58 AM'
		},
		{
			title: 'Powershell',
			imagePath: 'https://www.techrepublic.com/wp-content/uploads/2020/09/powershell.jpg',
			link: '/blog/PowerShell',
			readTime: '20 min',
			content: `Powershell notes.`,
			tags: ['Powershell'],
			postTime: '3/7/2018, 4:11:58 PM'
		},
		{
			title: 'Svelte',
			imagePath: 'https://svelte.deepwebworks.com/svelte-kit-machine.jpg',
			link: '',
			readTime: '20 min',
			content: `This Resume WebApp was built to learn and test out svelte and sveltekit https://kit.svelte.dev/. `,
			tags: ['Svelte', 'SvelteKit'],
			postTime: '3/7/2022, 4:11:58 PM'
		},
		{
			title: 'Java',
			imagePath:
				'https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg',
			link: '',
			readTime: '20 min',
			content: ``,
			tags: ['Java', 'Selenium', 'RestAssured'],
			postTime: '3/7/2022, 4:11:58 PM'
		},
		{
			title: 'Docker',
			imagePath:
				'https://www.turing.com/blog/wp-content/uploads/2021/11/How-You-Can-Use-Docker-to-Test-and-Deploy-Web-Applications-1-e1637249944419.jpg',
			link: '',
			readTime: '20 min',
			content: `This is Currenly just a place holder.`,
			tags: ['eee', 'ee'],
			postTime: '3/7/2022, 4:11:58 PM'
		},
		{
			title: 'React',
			imagePath: 'https://tusharf5.com/assets/header.bfa5b8b6.png',
			link: '',
			readTime: '20 min',
			content: `Currently Building a React Web Application intereacting with another API I created for tounaments.`,
			tags: ['React', 'Storybook', 'MongoDB', 'Express', 'NodeJs', 'Docker'],
			postTime: '6/13/2024, 1:45:00 PM'
		}
	]
};
